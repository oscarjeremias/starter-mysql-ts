import connect from "../connect";
import { Request, Response } from "express";
import { QueryError } from "mysql2";

export function createPostControl(req: Request, res: Response) {
  const data = req.body;
  connect.query(
    `
    INSERT INTO posts(title,content)
    VALUES('${data.title}','${data.content}')`,
    (err: QueryError) => {
      if (err) throw err;
      res.json(data);
    }
  );
}
