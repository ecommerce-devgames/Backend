const express = require("express");
const { Op } = require("sequelize");
const { validateToken } = require("../middleware/validateToken");
const { Game, User, Developer, Genres, Platform, Tag } = require("../models");
const {
  getAllGames,
  findGamesByCategory,
  searchGameByName,
  getAGameById,
  adminCreateAGame,
  adminEditAGame,
} = require("../controllers/games");

const router = express.Router();

router.get("/", getAllGames);

// find games by category
router.get("/category/:category", validateToken, findGamesByCategory);

// search a  game by name
router.get("/search", validateToken, searchGameByName);

// get a game by ID
router.get("/:id", getAGameById);

router.post("/admin/create", validateToken, adminCreateAGame);

router.put("/admin/edit/:id", validateToken, adminEditAGame);

router.delete("/admin/delete/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  return Game.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => next(err));
});

module.exports = router;
