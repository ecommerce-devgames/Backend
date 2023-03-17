const { Game, Developer } = require("../models");

const getAllDevelopers = async (req, res, next) => {
  let developers;
  try {
    developers = await Developer.findAll();
  } catch (error) {
    return res.status(404).send(error);
  }
  return res.send(developers).status(200);
};

const getADeveloperById = async (req, res, next) => {
  let games;
  try {
    games = await Developer.findAll({
      where: { id: req.params.id },
      include: [Game],
    });
  } catch (error) {
    res.status(404).send(error);
  }
  return res.send(games).status(200);
};

const createADeveloper = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let developer, created;
  try {
    [developer, created] = await Developer.findOrCreate({
      where: { ...req.body },
      defaults: { ...req.body },
    });
  } catch (error) {
    return res.send(error).status(400);
  }
  if (created) return res.send("Developer Created").status(201);
  else return res.status(200).send("The Developer Already Exist");
};

const editADeveloper = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let affected, resulting;
  try {
    [affected, resulting] = await Developer.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    );
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.send(resulting[0]).status(202);
};

const deleteAGame = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  try {
    await Developer.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.status(202).send("Developer Deleted");
};

module.exports = {
  getAllDevelopers,
  getADeveloperById,
  createADeveloper,
  editADeveloper,
  deleteAGame,
};
