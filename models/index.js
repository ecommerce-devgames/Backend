const User = require("./User");
const Game = require("./Game");
const Platform = require("./Platform");
const Genres = require("./Genres");
const Tag = require("./Tag");
const Developer = require("./Developer");
const Cart = require("./Cart");
const Library = require("./Library");
const Review = require("./Review");

// Relationship Cart-User
Cart.belongsTo(User);
User.hasOne(Cart);

// Relationship Cart-Game
Game.belongsToMany(Cart, { through: "cart_item" });
Cart.belongsToMany(Game, { through: "cart_item" });

// Relationship Library-User
Library.belongsTo(User);
User.hasOne(Library);

// Relationship Library-Game
Game.belongsToMany(Library, { through: "library_item" });
Library.belongsToMany(Game, { through: "library_item" });

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

// Relationship Review-User
Review.belongsTo(User);
User.hasMany(Review);

// Relationship Review-Game
Review.belongsTo(Game);
Game.hasMany(Review);

module.exports = {
  User,
  Game,
  Platform,
  Genres,
  Tag,
  Developer,
  Cart,
  Library,
  Review,
};
