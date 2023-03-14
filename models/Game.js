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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "game",
  }
);

Game.addHook("beforeValidate", (game) => {
  if (game.name) game.name = game.name.trim();
});

Game.beforeValidate((game) => {
  let random = (Math.random() + 1).toString(36).substring(5);
  if (game.name)
    game.slug = game.name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/\W/g, "");
  if (game.slug) game.downloadURL = `${game.slug}/${random}`;
  game.price = parseFloat(Math.random() * (99.9 - 5.1) + 5.1).toFixed(1);
});

Game.addHook("beforeUpdate", (game) => {
  let random = (Math.random() + 1).toString(36).substring(5);
  game.slug = game.name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/\W/g, "");
  game.downloadURL = `${game.slug}/${random}`;
});

module.exports = Game;
