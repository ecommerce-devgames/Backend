const User = require("./User");
const Game = require("./Game");
const Platform = require("./Platform");
const Genres = require("./Genres");
const Tag = require("./Tag");
const Developer = require("./Developer");
const Cart = require("./Cart");

// Relationship Cart-User
Cart.belongsTo(User);
User.hasOne(Cart);

// Relationship Cart-Game
Game.belongsToMany(Cart, { through: "cart_item" });
Cart.belongsToMany(Game, { through: "cart_item" });

// Relationship Game-Developer

Game.belongsToMany(Developer, { through: "game_developer" });
Developer.belongsToMany(Game, { through: "game_developer" });

// Relationship Game-Platform

Game.belongsToMany(Platform, { through: "game_platform" });
Platform.belongsToMany(Game, { through: "game_platform" });

// Relationship Game-Genres

Game.belongsToMany(Genres, { through: "game_genres" });
Genres.belongsToMany(Game, { through: "game_genres" });

// Relationship Game-Tag

Game.belongsToMany(Tag, { through: "game_tag" });
Tag.belongsToMany(Game, { through: "game_tag" });

module.exports = {
  User,
  Game,
  Platform,
  Genres,
  Tag,
  Developer,
  Cart,
};
