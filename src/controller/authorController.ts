import { Request, Response } from "express";
import * as authorService from "../services/authorService";
import asyncHandler from "../utils/asyncHandler";

export const getAllAuthors = asyncHandler(
  async (req: Request, res: Response) => {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  }
);

// Add other controller methods as needed
