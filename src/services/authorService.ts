import { Author, Book } from "../models";

export const getAllAuthors = async () => {
  return await Author.findAll({
    include: [Book],
  });
};

// Add other service methods as needed
