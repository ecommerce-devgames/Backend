const express = require("express");

const { Review, User } = require("../models");

const router = express.Router();

// Get all reviews of a game
router.get("/:gameId/", (req, res, next) => {
  const { gameId } = req.params;

  return Review.findAll({
    where: { gameId },
    include: [
      {
        model: User,
        attributes: ["id", "name", "lastName"],
      },
    ],
    attributes: ["id", "content", "rating"],
  })
    .then((reviews) => res.status(201).send(reviews))
    .catch((err) => next(err));
});

// Get a review of a game from a User
router.get("/:gameId/:userId", (req, res, next) => {
  const { gameId, userId } = req.params;

  return Review.findOne({
    where: { gameId, userId },
    include: [
      {
        model: User,
        attributes: ["id", "name", "lastName"],
      },
    ],
    attributes: ["id", "content", "rating"],
  })
    .then((review) => res.status(201).send(review))
    .catch((err) => next(err));
});

// Create a review for a game from a user
router.post("/:gameId/:userId", (req, res, next) => {
  const { gameId, userId } = req.params;
  const { content, rating } = req.body;

  return Review.create({ content, rating, userId, gameId })
    .then((review) => res.status(201).send(review))
    .catch((err) => next(err));
});

module.exports = router;
