import express from "express";
import rootRouter from "./src/routers/root.router.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.json("Server đang chạy thành công trên cổng 3098");
});

app.use("/api", rootRouter);

const PORT = 3098;

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
