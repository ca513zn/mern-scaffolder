// src/types/express.d.ts
import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
    };
  }
}

export interface AuthenticatedRequest extends Request {
  user?: IUser; // `user` will be populated by auth middleware
}
