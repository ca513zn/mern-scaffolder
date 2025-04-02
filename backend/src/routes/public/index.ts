import googleAuth from "@/controllers/auth/googleAuth.controller";
import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).send("200");
});

router.post("/auth/google", googleAuth);

export default router;
