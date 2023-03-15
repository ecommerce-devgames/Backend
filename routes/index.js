const express = require("express");
const router = express.Router();
const users = require("./users");
const games = require("./games");
const cart = require("./cart");
const genres = require("./genres");
const developers = require("./developers");
const platforms = require("./platforms");

router.use("/user", users);
router.use("/games", games);
router.use("/cart", cart);
router.use("/genres", genres);
router.use("/developers", developers);
router.use("/platforms", platforms);

module.exports = router;
