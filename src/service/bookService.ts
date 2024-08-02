import { Book, Author } from "../models";

export const getAllBooks = async () => {
  return await Book.findAll({
    include: [{ model: Author, attributes: ["name"] }],
  });
};

// Add other service methods as needed
