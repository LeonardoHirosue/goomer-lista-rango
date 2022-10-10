import { Pool, QueryConfig } from "pg";

import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
})

export default {

  async query(params: QueryConfig) {
    const start = Date.now()
    const res = await pool.query(params)
    const duration = Date.now() - start
    console.log('executed query', { text: params.name, duration, rows: res.rowCount })
    return res
  }
}

