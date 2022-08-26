import mongoose from "mongoose";
import UserInterface from "../interfaces/UserInterface";

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      index: true,
      required: true,
    },
    password: {
      type: String,
      hidden: true,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    collection: "users",
  }
);

const UserModel: mongoose.Model<UserInterface> = mongoose.model<
  UserInterface,
  mongoose.Model<UserInterface>
>("User", UserSchema);

export default UserModel;
