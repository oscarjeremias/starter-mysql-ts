import connect from "../connect";
import { Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";

export function updatePostControl(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  connect.query(
    `
   SELECT * FROM posts

   WHERE id = ${id}
                `,
    (err: QueryError, result: RowDataPacket[]) => {
      if (err) throw err;
      connect.query(
        `UPDATE posts SET title = "${
          data.title === undefined ? result[0].title : data.title
        }",
        content = "${
          data.content === undefined ? result[0].content : data.title
        }"`,
        (err: QueryError) => {
          if (err) throw err;
          res.json(data);
        }
      );
    }
  );
}
