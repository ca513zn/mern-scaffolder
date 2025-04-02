import { Request, Response } from "express";

const googleAuth = async (req: Request, res: Response) => {
  const { token } = req.body;

  // TODO: Verify token with Google API
  // const ticket = await client.verifyIdToken({ idToken: token, audience: CLIENT_ID });
  // const payload = ticket.getPayload();

  // Mock user data
  const user = { id: "google-user-123", email: "user@example.com" };

  // Generate your own JWT
  const jwt = require("jsonwebtoken");
  const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.json({ token: jwtToken });
};

export default googleAuth;
