import { Model, DataTypes, Sequelize } from "sequelize";

export class Author extends Model {
  public id!: number;
  public name!: string;
}

export default (sequelize: Sequelize) => {
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );

  return Author;
};
