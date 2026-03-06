import express from "express";
import { rateResController } from "../controllers/rateRes.controller.js";

const rateResRouter = express.Router();

rateResRouter.get("/rateRes", rateResController.findAll);

rateResRouter.post("/rateRes", rateResController.create);

export default rateResRouter;
