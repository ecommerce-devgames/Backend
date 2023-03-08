const User = require("./User");
const Game = require("./Game");
const Platform = require("./Platform");
const Genres = require("./Genres");
const Tag = require("./Tag");
const Developer = require("./Developer");
const Library = require("./Library");
const Transaction = require("./Transaction");
const Cart = require("./Cart");

Cart.belongsTo(User);
User.hasOne(Cart);
Game.belongsToMany(Cart, { through: "cartItem" });
Cart.belongsToMany(Game, { through: "cartItem" });

module.exports = {
  User,
  Game,
  Platform,
  Genres,
  Tag,
  Developer,
  Library,
  Transaction,
  Cart,
};
