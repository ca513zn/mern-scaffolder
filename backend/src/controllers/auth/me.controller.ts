import { Response } from "express";
import { AuthenticatedRequest } from "../../../types/express";

export const getAuthenticatedUser = (
  req: AuthenticatedRequest,
  res: Response
) => {
  res.json({ user: req.user });
};
