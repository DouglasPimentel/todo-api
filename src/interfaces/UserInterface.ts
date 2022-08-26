import mongoose from "mongoose";

interface UserInterface extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

export default UserInterface;
