const express = require("express");
const { Op } = require("sequelize");
const { validateToken } = require("../middleware/validateToken");
const { Game, User, Developer, Genres, Platform, Tag } = require("../models");

const router = express.Router();

router.get("/", (req, res, next) => {
  return Game.findAll()
    .then((games) => res.send(games))
    .catch((err) => next(err));
});

// find games by category
router.get("/category/:category", validateToken, (req, res, next) => {
  const category = req.params.category;
  return Game.findAll({
    include: [
      {
        model: Genres,
        where: {
          name: category,
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
});

// search a  game by name
router.get("/search", validateToken, (req, res, next) => {
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
        [Op.like]: `%${name}%`,
      },
    },
  })
    .then((games) => res.status(200).send(games))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  return Game.findByPk(req.params.id)
    .then((game) => res.send(game))
    .catch((err) => next(err));
});

router.post("/admin/create", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  const name = req.body.name.trim();

  return Game.findOrCreate({
    where: { name },
    defaults: { ...req.body },
  })
    .then(([game, created]) => {
      if (created) return res.status(201).send(game);
      res.sendStatus(403);
    })
    .catch((err) => next(err));
});

router.put("/admin/edit/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  return Game.update(
    { ...req.body },
    { where: { id: req.params.id }, returning: true, individualHooks: true }
  )
    .then(([affected, resulting]) => res.send(resulting))
    .catch((err) => next(err));
});

router.delete("/admin/delete/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  return Game.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => next(err));
});

module.exports = router;
