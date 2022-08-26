import mongoose from "mongoose";
import TodoInteface from "../interfaces/TodoInterface";

const TodoSchema = new mongoose.Schema<TodoInteface>(
  {
    name: {
      type: String,
      index: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: null,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    collection: "tasks",
  }
);

const TodoModel: mongoose.Model<TodoInteface> = mongoose.model<
  TodoInteface,
  mongoose.Model<TodoInteface>
>("Todo", TodoSchema);

export default TodoModel;
