import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { usersControllers } from "./user.controlers";
import auth from "../../middleware/auth";
const router = express.Router();

router.post("/", usersControllers.createUser);

router.get("/", auth("admin"), usersControllers.getUser)

router.get("/:id", auth("admin", "user"), usersControllers.getSingleUser);

router.put("/:id", usersControllers.updateUser);

router.delete("/:id", usersControllers.deleteUser);

export const userRoutes = router;