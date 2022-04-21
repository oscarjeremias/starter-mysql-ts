import connect from "./connect";
import { QueryError, RowDataPacket, FieldPacket } from "mysql2";
const sql = `
CREATE TABLE posts(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(500),
  content VARCHAR(10000)
)
`;

connect.query(
  sql,
  (err: QueryError, result: RowDataPacket, fields: FieldPacket[]) => {
    if (err) throw err;
    console.log("TABLE CREATE SUCESS!");
  }
);
