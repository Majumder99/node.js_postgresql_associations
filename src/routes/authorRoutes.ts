import express from "express";
import * as authorController from "../controllers/authorController";

const router = express.Router();

router.get("/", authorController.getAllAuthors);

// Add other routes as needed

export default router;
