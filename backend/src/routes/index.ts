import { Router } from "express";
import publicRoutes from "./public";
import privateRoutes from "./private";

const router = Router();

router.use("/", publicRoutes);

router.use("/protected", privateRoutes);

export default router;
