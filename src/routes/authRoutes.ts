import express from "express";
import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/users", authController.getAllusers);

export default router;
