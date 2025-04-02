import { Schema, model, Document } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
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
});

const User = model<User>("User", userSchema);

export default User;
