const express = require("express");
const { validateToken } = require("../middleware/validateToken");
const {
  getAllGames,
  findGamesByCategory,
  searchGameByName,
  getAGameById,
  adminCreateAGame,
  adminEditAGame,
  adminDeleteAGame,
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

router.delete("/admin/delete/:id", validateToken, adminDeleteAGame);

module.exports = router;
