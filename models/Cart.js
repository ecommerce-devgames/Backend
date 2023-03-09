const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Cart extends Model {}

Cart.init(
  {
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "cart",
  }
);

module.exports = Cart;
