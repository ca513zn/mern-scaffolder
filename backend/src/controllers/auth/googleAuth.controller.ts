import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "@/models/User";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * @route   POST /api/auth/google
 * @desc    Verify Google token, create/find user, and return JWT
 * @access  Public
 */
const googleAuth: RequestHandler = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ error: "Google token is required." });
      return;
    }

    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) {
      res.status(401).json({ error: "Invalid Google token." });
      return;
    }

    const { sub, email, name, picture } = payload;

    // Find or create user
    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = new User({
        googleId: sub,
        email,
        name,
        picture,
        role: "user",
      });
      await user.save();
    }

    // Generate JWT token
    const authToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("authToken", authToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ token: authToken, user });
  } catch (error) {
    console.error("Error in Google authentication:", error);
    res.status(500).json({ error: "Authentication failed." });
  }
};

export default googleAuth;
