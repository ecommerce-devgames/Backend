const express = require("express");
const {
  getAllGenres,
  getAGenreById,
  createAGenre,
  editAGenre,
  deleteAGenre,
} = require("../controllers/genres");
const { validateToken } = require("../middleware/validateToken");

const router = express.Router();

router.get("/", getAllGenres);

router.get("/:id", getAGenreById);

router.post("/create", validateToken, createAGenre);

router.put("/edit/:name", validateToken, editAGenre);

router.delete("/:id", validateToken, deleteAGenre);

module.exports = router;
