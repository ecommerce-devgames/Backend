const express = require("express");
const router = express.Router();
const users = require("./users");
const games = require("./games");
const cart = require("./cart");
const genres = require("./genres");
const developers = require("./developers");
const platforms = require("./platforms");
const review = require("./review");

router.use("/user", users);
router.use("/games", games);
router.use("/cart", cart);
router.use("/genres", genres);
router.use("/developers", developers);
router.use("/platforms", platforms);
router.use("/review", review);

module.exports = router;
