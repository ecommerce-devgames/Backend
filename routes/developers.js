const express = require("express");
const {
  getAllDevelopers,
  getADeveloperById,
  createADeveloper,
  editADeveloper,
  deleteAGame,
} = require("../controllers/developers");
const { validateToken } = require("../middleware/validateToken");

const router = express.Router();

router.get("/", getAllDevelopers);

router.get("/:id", getADeveloperById);

router.post("/create", validateToken, createADeveloper);

router.put("/edit/:id", validateToken, editADeveloper);

router.delete("/:id", validateToken, deleteAGame);

module.exports = router;
