const express = require("express");
const { validateToken } = require("../middleware/validateToken");
const { Game, User, Genres, Platform, Developer, Tag } = require("../models");

const router = express.Router();

router.get("/", (req, res, next) => {
  return Game.findAll()
    .then((games) => res.send(games))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
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
});

router.post("/admin/create", validateToken, async (req, res, next) => {
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
});

router.put("/admin/edit/:id", validateToken, async (req, res, next) => {
  const { genres, developers, platforms, ...data } = req.body;
  if (!req.user.isAdmin) return res.sendStatus(401);

  const editGenres = await Genres.findAll({ where: { name: genres } });
  const editDevelopers = await Developer.findAll({
    where: { name: developers },
  });
  const editPlatforms = await Platform.findAll({ where: { name: platforms } });
  await Game.update(
    { ...data },
    { where: { id: req.params.id }, individualHooks: true }
  );
  return Game.findOne({
    where: { id: req.params.id },
    include: [Genres, Developer, Platform],
  }).then((game) => {
    game.setGenres(editGenres);
    game.setDevelopers(editDevelopers);
    game.setPlatforms(editPlatforms);
    res.send(game);
  });
});

router.delete("/admin/delete/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  return Game.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => next(err));
});

module.exports = router;
