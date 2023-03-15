const { Op } = require("sequelize");
const { Game, Developer, Genres, Platform } = require("../models");

const getAllGames = async (req, res, next) => {
  let games;
  try {
    games = await Game.findAll();
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.send(games).status(200);
};

const findGamesByCategory = async (req, res, next) => {
  const category = req.params.category;
  let games;
  try {
    games = await Game.findAll({
      include: [
        { model: Genres, where: { name: { [Op.iLike]: category } } },
        { model: Developer },
        { model: Platform },
      ],
    });
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.send(games).status(200);
};

const searchGameByName = async (req, res, next) => {
  const name = req.query.name;
  let games;
  try {
    games = await Game.findAll({
      include: [{ model: Genres }, { model: Developer }, { model: Platform }],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.status(200).send(games);
};
const searchGameByTag = async (req, res, next) => {
  let games;
  try {
    games = await Game.findByTag(req.params.tag);
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.status(200).send(games);
};

const getAGameById = async (req, res, next) => {
  let game;
  try {
    game = await Game.findByPk(req.params.id, {
      include: [
        { model: Genres, attributes: ["name"] },
        { model: Developer, attributes: ["name"] },
        { model: Platform, attributes: ["name"] },
      ],
    });
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.status(200).send(game);
};

const adminCreateAGame = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  const name = req.body.name.trim();
  const { genres, developers, platforms, ...data } = req.body;
  let game, created, editDevelopers, editGenres, editPlatforms;
  try {
    editGenres = await Genres.findAll({ where: { name: genres } });
    editDevelopers = await Developer.findAll({
      where: { name: developers },
    });
    editPlatforms = await Platform.findAll({ where: { name: platforms } });

    [game, created] = await Game.findOrCreate({
      where: { name },
      defaults: {
        ...data,
      },
      include: [Genres, Developer, Platform],
    });
    if (created) {
      game.setGenres(editGenres);
      game.setDevelopers(editDevelopers);
      game.setPlatforms(editPlatforms);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.status(200).send(game);
};

const adminEditAGame = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  const { genres, developers, platforms, ...data } = req.body;
  let editGenres, editDevelopers, editPlatforms, game, affected, resulting;
  try {
    editGenres = await Genres.findAll({ where: { name: genres } });
    editPlatforms = await Platform.findAll({ where: { name: platforms } });
    editDevelopers = await Developer.findAll({
      where: { name: developers },
    });

    [affected, resulting] = await Game.update(
      { ...data },
      { where: { id: req.params.id }, individualHooks: true }
    );
    if (affected) {
      game = await Game.findOne({
        where: { id: req.params.id },
        include: [Genres, Developer, Platform],
      });
      game.setGenres(editGenres);
      game.setDevelopers(editDevelopers);
      game.setPlatforms(editPlatforms);
    }
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.status(400).send(game);
};

const adminDeleteAGame = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);

  try {
    await Game.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.status(400).send(error);
  }
  return res.sendStatus(204);
};

module.exports = {
  getAllGames,
  findGamesByCategory,
  searchGameByName,
  getAGameById,
  adminCreateAGame,
  adminEditAGame,
  adminDeleteAGame,
  searchGameByTag,
};
