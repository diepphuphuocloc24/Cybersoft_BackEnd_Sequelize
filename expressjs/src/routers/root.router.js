import express from "express";
import likeResRouter from "./likeRes.router.js";
import rateResRouter from "./rateRes.router.js";
import orderRouter from "./order.router.js";

const rootRouter = express.Router();

rootRouter.use("/", likeResRouter);

rootRouter.use("/", rateResRouter);

rootRouter.use("/", orderRouter);

export default rootRouter;
