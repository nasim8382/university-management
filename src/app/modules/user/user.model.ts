import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
    },
    password: {
      type: String,
    },
    needsPasswordChange: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
    },
    isDeleted: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", userSchema);
