const Sequelize = require("sequelize");

const db = new Sequelize("devgames3", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
