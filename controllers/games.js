const { Game, User, Developer, Genres, Platform, Tag } = require("../models");

const getAllGames = (req, res, next) => {
  return Game.findAll()
    .then((games) => res.send(games))
    .catch((err) => next(err));
};

module.exports = { getAllGames };
