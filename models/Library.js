const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Library extends Model {}

Library.init(
  {},
  {
    sequelize: db,
    modelName: "library",
  }
);

module.exports = Library;
