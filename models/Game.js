const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Game extends Model {}

Game.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    playtime: {
      type: DataTypes.INTEGER,
    },
    released: {
      type: DataTypes.DATE,
    },
    downloadURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "game",
  }
);

module.exports = Game;
