const { Game, Platform } = require("../models");

const getAllPlatforms = async (req, res, next) => {
  let platforms;
  try {
    platforms = await Platform.findAll();
  } catch (error) {
    return res.status(404).send(error);
  }
  return res.send(platforms).status(200);
};

const getAPlatformById = async (req, res, next) => {
  let games;
  try {
    games = await Platform.findAll({
      where: { id: req.params.id },
      include: [Game],
    });
  } catch (error) {
    res.status(404).send(error);
  }
  return res.send(games).status(200);
};

const createAPlatform = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let platform, created;
  try {
    [platform, created] = await Platform.findOrCreate({
      where: { ...req.body },
      defaults: { ...req.body },
    });
  } catch (error) {
    return res.send(error).status(400);
  }
  if (created) return res.send("Platform Created").status(201);
  else return res.status(200).send("The Platform Already Exist");
};

const editAPlatform = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let affected, resulting;
  try {
    [affected, resulting] = await Platform.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    );
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.send(resulting[0]).status(202);
};

const deleteAPlatform = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  try {
    await Platform.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.status(202).send("Platform Deleted");
};

module.exports = {
  getAllPlatforms,
  getAPlatformById,
  createAPlatform,
  editAPlatform,
  deleteAPlatform,
};
