import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const url = process.env.DATABASE_URL;

const connect = mysql.createConnection(`${url}`);

export default connect;
