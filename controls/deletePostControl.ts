import connect from "../connect";
import { Request, Response } from "express";
import { QueryError } from "mysql2";

export function deletePostControl(req: Request, res: Response) {
  const { id } = req.params;

  const sql = `
  DELETE FROM posts WHERE id = ${id}
  `;
  connect.query(sql, (err: QueryError) => {
    if (err) throw err;
    res.json({ sms: `O post com o id ${id} foi deletado com sucesso` });
  });
}
