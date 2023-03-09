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
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "game",
  }
);

Game.addHook ("beforeValidate", game => {

    if (game.name) game.name = game.name.trim ();
});

Game.beforeValidate((game) => {

  if (game.name) game.slug = game.name.trim().toLowerCase ().replace(/\s+/g, "_").replace(/\W/g, "");
});

Game.addHook (("beforeUpdate"), game => {
  
  game.slug = game.name.trim().toLowerCase ().replace(/\s+/g, "_").replace(/\W/g, "");
});

module.exports = Game;