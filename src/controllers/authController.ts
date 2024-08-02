import { Request, Response } from "express";
import * as authService from "../services/authService";
import asyncHandler from "../utils/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await authService.registerUser(username, password);
  res
    .status(201)
    .json({ message: "User registered successfully", userId: user.id });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await authService.loginUser(username, password);
  res.json({ token });
});
