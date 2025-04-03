import { Router } from "express";
import { authenticateUser } from "@/middleware/auth.middleware";
import { logout } from "@/controllers/auth/logout.controller";
import { getAuthenticatedUser } from "@/controllers/auth/me.controller";

const router = Router();

router.get("/auth/me", authenticateUser, getAuthenticatedUser);

router.post("/auth/logout", logout);

export default router;
