import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("Authors", [
      {
        name: "George Orwell",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "J.K. Rowling",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stephen King",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Authors", {});
  },
};
