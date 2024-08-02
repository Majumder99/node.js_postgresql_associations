import { Request, Response } from "express";
import * as bookService from "../services/bookService";
import asyncHandler from "../utils/asyncHandler";

export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await bookService.getAllBooks();
  res.json(books);
});

// Add other controller methods as needed
