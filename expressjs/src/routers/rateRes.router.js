import express from "express";
import { rateResController } from "../controllers/rateRes.controller.js";

const rateResRouter = express.Router();

rateResRouter.post("/rateRes", rateResController.create);

export default rateResRouter;
