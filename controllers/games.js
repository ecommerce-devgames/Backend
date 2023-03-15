const { Op } = require("sequelize");
const { Game, User, Developer, Genres, Platform, Tag } = require("../models");

const getAllGames = (req, res, next) => {
  return Game.findAll()
    .then((games) => res.send(games))
    .catch((err) => next(err));
};

const findGamesByCategory = (req, res, next) => {
  const category = req.params.category;
  return Game.findAll({
    include: [
      {
        model: Genres,
        where: {
          name: {
            [Op.iLike]: category,
          },
        },
      },
      {
        model: Developer,
      },
      {
        model: Platform,
      },
      {
        model: Tag,
      },
    ],
  })
    .then((games) => res.status(200).send(games))
    .catch((err) => next(err));
};

const searchGameByName = (req, res, next) => {
  const name = req.query.name;

  return Game.findAll({
    include: [
      {
        model: Genres,
      },
      {
        model: Developer,
      },
      {
        model: Platform,
      },
      {
        model: Tag,
      },
    ],
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  })
    .then((games) => res.status(200).send(games))
    .catch((err) => next(err));
};

module.exports = { getAllGames, findGamesByCategory, searchGameByName };
