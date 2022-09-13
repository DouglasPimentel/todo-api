import Koa from "koa";
import TodoModel from "../models/TodoModel";

const getAll = async (ctx: Koa.ParameterizedContext) => {
  try {
    const todos = await TodoModel.find({});

    ctx.status = 200;
    ctx.body = {
      results: todos.length,
      todos,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error" };
  }
};

const create = async (ctx: Koa.ParameterizedContext) => {
  const id = ctx.params.id;
  const { name, description, status } = ctx.request.body;

  const todoExists = await TodoModel.findOne({ name });

  if (todoExists) {
    ctx.status = 400;
    ctx.body = {
      message: "Task already registered",
    };
    return;
  }

  try {
    const newTodo = await new TodoModel({
      name,
      description,
      status,
      userId: id,
    }).save();

    ctx.status = 201;
    ctx.body = {
      todo: newTodo,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error" };
  }
};

export default {
  getAll,
  create,
};
