import express from "express";
import "express-async-errors";

import { errorMiddleware } from "middlewares/error";
import { router } from "./routes";
import { Pool } from "pg";


const pool = new Pool();
pool.connect()
    .catch((error) => console.log(error))
    .then(() => {
        const app = express();

        app.use(express.json());

        app.use(router);

        app.use(errorMiddleware);

        app.listen(3333, () => console.log("Server is running"));
    });