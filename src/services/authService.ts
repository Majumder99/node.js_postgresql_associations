import jwt from "jsonwebtoken";
import { User } from "../models";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const registerUser = async (username: string, password: string) => {
  const user = await User.create({ username, password });
  return user;
};

export const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid username or password");
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
  return token;
};
