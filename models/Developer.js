const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Developer extends Model {}

Developer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "developer",
  }
);

module.exports = Developer;
