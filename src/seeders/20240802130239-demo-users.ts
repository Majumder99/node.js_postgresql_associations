import { QueryInterface } from "sequelize";
import bcrypt from "bcryptjs";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const password = await bcrypt.hash("password123", 10);
    return queryInterface.bulkInsert("Users", [
      {
        username: "user1",
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user2",
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  },
};
