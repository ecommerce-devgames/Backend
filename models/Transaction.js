const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Transaction extends Model {}

Transaction.init(
  {},
  {
    sequelize: db,
    modelName: "transaction",
  }
);

module.exports = Transaction;
