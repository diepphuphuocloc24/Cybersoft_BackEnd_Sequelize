import express from "express";
import likeResController from "../controllers/likeRes.controller.js";

const likeResRouter = express.Router();

likeResRouter.post("/likeRes", likeResController.create);

export default likeResRouter;
