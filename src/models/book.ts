import { Model, DataTypes, Sequelize } from 'sequelize';

export class Book extends Model {
  public id!: number;
  public title!: string;
  public authorId!: number;
}

export default (sequelize: Sequelize) => {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );

  return Book;
};
