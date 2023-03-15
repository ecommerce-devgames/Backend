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

const getAGameById = (req, res, next) => {
  return Game.findByPk(req.params.id, {
    include: [
      { model: Genres, attributes: ["name"] },
      { model: Developer, attributes: ["name"] },
      { model: Platform, attributes: ["name"] },
      { model: Tag, attributes: ["name"] },
    ],
  })
    .then((game) => res.send(game))
    .catch((err) => next(err));
};

const adminCreateAGame = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  const name = req.body.name.trim();
  const { genres, developers, platforms, ...data } = req.body;
  const editGenres = await Genres.findAll({ where: { name: genres } });
  const editDevelopers = await Developer.findAll({
    where: { name: developers },
  });
  const editPlatforms = await Platform.findAll({ where: { name: platforms } });

  return Game.findOrCreate({
    where: { name },
    defaults: {
      ...data,
    },
    include: [Genres, Developer, Platform],
  })
    .then(([game, created]) => {
      if (created) {
        game.setGenres(editGenres);
        game.setDevelopers(editDevelopers);
        game.setPlatforms(editPlatforms);
        return res.status(201).send(game);
      }
      res.sendStatus(403);
    })
    .catch((err) => next(err));
};

module.exports = {
  getAllGames,
  findGamesByCategory,
  searchGameByName,
  getAGameById,
  adminCreateAGame,
};
