import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

import { version } from "../package.json";
import UserController from "./controllers/UserController";
import TodoController from "./controllers/TodoController";

const app = new Koa();
const router = new Router({ prefix: "/v1/" });

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = { message: "Todo API" };
});

router.get("/version", (ctx) => {
  ctx.status = 200;
  ctx.body = {
    status: "OK",
    version,
  };
});

// user api routes
router.get("/users", UserController.getAll);
router.post("/users", UserController.create);

// todo api routes
router.get("/todos", TodoController.getAll);
router.post("/todos/:id", TodoController.create);

export default app;
