import Koa from "koa";
import UserModel from "../models/UserModel";
import encryptPassword from "../utils/encryptPassword";

const getAll = async (ctx: Koa.ParameterizedContext) => {
  try {
    const users = await UserModel.find({});

    ctx.status = 200;
    ctx.body = {
      results: users.length,
      users,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Unknown error" };
  }
};

const create = async (ctx: Koa.ParameterizedContext) => {
  const { name, email, password } = ctx.request.body;

  if (!name || !email || !password) {
    ctx.status = 400;
    ctx.body = {
      message: "Empty field",
    };
  }

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    ctx.status = 400;
    ctx.body = {
      message: "Email already registered",
    };
    return;
  }

  try {
    const newUser = await new UserModel({
      name,
      email,
      password: encryptPassword(password),
    }).save();

    ctx.status = 201;
    ctx.body = { user: newUser };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error" };
  }
};

export default {
  getAll,
  create,
};
