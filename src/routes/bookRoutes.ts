// import express from "express";
// import { Book, Author } from "../models";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.findAll({
//       include: [{ model: Author, attributes: ["name"] }],
//     });
//     res.json({ message: "Successfully retrive all the books", books });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// export default router;

import express from "express";
import * as bookController from "../controllers/bookController";

const router = express.Router();

router.get("/", bookController.getAllBooks);

// Add other routes as needed

export default router;