const express = require("express");

const { Review } = require("../models");

const router = express.Router();

router.post("/:gameId/:userId", (req, res, next) => {
  const { gameId, userId } = req.params;
  const { content, rating } = req.body;

  return Review.create({ content, rating, userId, gameId })
    .then((review) => res.status(201).send(review))
    .catch((err) => next(err));
});

module.exports = router;
