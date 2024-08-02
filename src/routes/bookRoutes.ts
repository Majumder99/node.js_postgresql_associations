import express from "express";
import * as bookController from "../controllers/bookController";

const router = express.Router();

router.get("/", bookController.getAllBooks);

// Add other routes as needed

export default router;
