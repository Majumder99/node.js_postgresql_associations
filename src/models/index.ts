import sequelize from "../config/database";
import authorModel from "./author";
import bookModel from "./book";

const Author = authorModel(sequelize);
const Book = bookModel(sequelize);

Author.hasMany(Book, { foreignKey: "authorId" });
Book.belongsTo(Author, { foreignKey: "authorId" });

export { sequelize, Author, Book };
