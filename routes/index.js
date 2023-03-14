const express = require("express");
const router = express.Router();
const users = require("./users");
const games = require ("./games");
const cart = require("./cart");

router.use("/user", users);
router.use ("/games", games);
router.use("/cart", cart);

module.exports = router;
