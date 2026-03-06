import express from "express";
import likeResController from "../controllers/likeRes.controller.js";

const likeResRouter = express.Router();

likeResRouter.post("/likeRes", likeResController.create);

likeResRouter.get("/likeRes", likeResController.findAll);

export default likeResRouter;
