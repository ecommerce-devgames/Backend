const express = require("express");
const {
  getAllPlatforms,
  getAPlatformById,
  createAPlatform,
  editAPlatform,
  deleteAPlatform,
} = require("../controllers/platforms");
const { validateToken } = require("../middleware/validateToken");

const router = express.Router();

router.get("/", getAllPlatforms);

router.get("/:id", getAPlatformById);

router.post("/create", validateToken, createAPlatform);

router.put("/edit/:id", validateToken, editAPlatform);

router.delete("/:id", validateToken, deleteAPlatform);

module.exports = router;
