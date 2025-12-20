import express, { NextFunction, Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();
const port = config.port;
app.use(express.json());

//DB init.
initDB();

app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello Next Level Developers !')
});

//? CRUD
app.use("/users", userRoutes);

//* Auth
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})