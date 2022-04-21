import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { showDataControl } from "./controls/showDataControl";
import { createPostControl } from "./controls/createPostControl";
import { updatePostControl } from "./controls/updatePostControl";
import { deletePostControl } from "./controls/deletePostControl";

const app = express();

app.use(express.json());

app.use(cors());

const port = 2500;

app.get("/", (req: Request, res: Response) => {
  showDataControl(req, res);
});
app.post("/create", (req: Request, res: Response) => {
  createPostControl(req, res);
});
app.put("/update/:id", (req: Request, res: Response) => {
  updatePostControl(req, res);
});
app.delete("/delete/:id", (req: Request, res: Response) => {
  deletePostControl(req, res);
});
app.listen(port, () => {
  console.log(`Em pé na porta ${port}`);
});
