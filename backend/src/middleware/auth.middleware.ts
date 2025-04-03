import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { AuthenticatedRequest } from "../../types/express";

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.cookies);
    if (!req.cookies) {
      console.error("❌ No cookies found in request");
      res.status(401).json({ error: "Unauthorized. No cookies found." });
      return; // ✅ Explicit return fixes TypeScript error
    }

    const token = req.cookies.authToken; // ✅ Read from cookies

    if (!token) {
      console.warn("❌ No auth token found in cookies");
      res.status(401).json({ error: "Access denied. No token provided." });
      return; // ✅ Explicit return fixes TypeScript error
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };
    } catch (err) {
      console.error("❌ Token verification failed:", err);
      res.status(401).json({ error: "Unauthorized. Invalid token." });
      return; // ✅ Explicit return fixes TypeScript error
    }

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      console.warn("❌ Token is valid, but no matching user found in database");
      res.status(401).json({ error: "Invalid token." });
      return; // ✅ Explicit return fixes TypeScript error
    }

    req.user = user;
    next(); // ✅ Next function does not return anything (void)
  } catch (error) {
    console.error("❌ Unexpected authentication error:", error);
    res
      .status(500)
      .json({ error: "Internal server error during authentication." });
    return; // ✅ Explicit return fixes TypeScript error
  }
};
