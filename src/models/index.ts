import sequelize from "../config/database";
import authorModel from "./author";
import bookModel from "./book";
import userModel from "./user";

const Author = authorModel(sequelize);
const Book = bookModel(sequelize);
const User = userModel(sequelize);

Author.hasMany(Book, { foreignKey: "authorId" });
Book.belongsTo(Author, { foreignKey: "authorId" });

export { sequelize, Author, Book, User };
