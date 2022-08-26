import mongoose from "mongoose";

interface TodoInteface extends mongoose.Document {
  name: string;
  description: string;
  status: string;
  userId: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

export default TodoInteface;
