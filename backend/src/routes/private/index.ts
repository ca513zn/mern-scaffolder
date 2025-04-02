import { Router } from "express";
import { authenticate } from "@/middleware/auth.middleware";

const router = Router();

router.use(authenticate);

router.get("/profile", (req, res) => {
  res.json({
    message: "Private route: Authenticated user 🎯",
    userId: req.user?.id,
  });
});

export default router;
