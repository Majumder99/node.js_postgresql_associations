import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // const authors = await queryInterface.sequelize.query(
    //   `SELECT id from "Authors";`
    // );
    // const authorRows = authors[0];

    return queryInterface.bulkInsert("Books", [
      {
        title: "1984",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Animal Farm",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Shining",
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "It",
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Stand",
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Books", {});
  },
};
