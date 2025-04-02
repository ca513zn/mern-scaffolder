import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send("Public route: API is alive 🌐");
});

// Mock Google login endpoint
router.post("/auth/google", async (req, res) => {
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
});

export default router;
