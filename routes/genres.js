const express = require("express");
const { validateToken } = require("../middleware/validateToken");
const { Game, Genres } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  let genres;
  try {
    genres = await Genres.findAll();
  } catch (error) {
    return res.status(404).send(error);
  }
  return res.send(genres).status(200);
});

router.get("/:id", async (req, res, next) => {
  let games;
  try {
    games = await Genres.findAll({
      where: { id: req.params.id },
      include: [Game],
    });
  } catch (error) {
    res.status(404).send(error);
  }
  return res.send(games).status(200);
});

router.post("/create", validateToken, async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let genre, created;
  try {
    [genre, created] = await Genres.findOrCreate({
      where: { ...req.body },
      defaults: { ...req.body },
    });
  } catch (error) {
    return res.send(error).status(400);
  }
  if (created) return res.send("Genre Created").status(201);
  else return res.status(200).send("The Genre Already Exist");
});

router.put("/edit/:id", validateToken, async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let affected, resulting;
  try {
    [affected, resulting] = await Genres.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    );
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.send(resulting[0]).status(202);
});

router.delete("/:id", validateToken, async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  try {
    await Genres.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.status(202).send("Genre Deleted");
});

module.exports = router;
