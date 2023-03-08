const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Genres extends Model {}

Genres.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "genres",
  }
);

module.exports = Genres;
