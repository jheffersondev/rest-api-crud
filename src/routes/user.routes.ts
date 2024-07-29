import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.get("/users", UserController.fetchAll);
router.get("/users/:id", UserController.fetchOne);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;
