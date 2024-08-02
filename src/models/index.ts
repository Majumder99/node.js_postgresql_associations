import { Sequelize } from "sequelize";
import authorModel from "./author";
import bookModel from "./book";

const sequelize = new Sequelize(
  "postgres://username:password@localhost:5432/bookstore"
);

const Author = authorModel(sequelize);
const Book = bookModel(sequelize);

Author.hasMany(Book, { foreignKey: "authorId" });
Book.belongsTo(Author, { foreignKey: "authorId" });

export { sequelize, Author, Book };
