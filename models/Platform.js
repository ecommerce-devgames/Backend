const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Platform extends Model {}

Platform.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "platform",
  }
);

module.exports = Platform;
