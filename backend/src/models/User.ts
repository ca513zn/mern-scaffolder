import { Schema, model, Document } from "mongoose";

enum UserRole {
  user = "user",
  admin = "admin",
}

interface User extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role?: UserRole;
  picture?: string;
  googleId?: string;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.user,
  },
  picture: {
    type: String,
    default: "",
  },
  googleId: {
    type: String,
    default: "",
  },
});

const User = model<User>("User", userSchema);

export default User;
