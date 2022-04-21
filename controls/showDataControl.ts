import { Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";
import connect from "../connect";

const sql = `
SELECT * FROM posts
`;

export function showDataControl(req: Request, res: Response) {
  connect.query(sql, (err: QueryError, result: RowDataPacket[]) => {
    if (err) throw err;
    res.json(result);
  });
}
