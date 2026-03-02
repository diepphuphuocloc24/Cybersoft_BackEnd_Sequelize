import express from "express";
import foodContoller from "../controllers/food.controller.js";

const foodRouter = express.Router();

foodRouter.get("/", foodContoller.findAll);

export default foodRouter;
