import express from "express";
import { Author, Book } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [Book],
    });
    res.json({ message: "Successfully retrive all the authors", authors });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
