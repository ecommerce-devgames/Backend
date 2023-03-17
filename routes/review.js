const express = require("express");

const {
  getAllReviewsOfAGame,
  getAReviewOfAGameFromAUser,
  createAReviewForAGameFromAUser,
} = require("../controllers/review");

const router = express.Router();

// Get all reviews of a game
router.get("/:gameId/", getAllReviewsOfAGame);

// Get a review of a game from a User
router.get("/:gameId/:userId", getAReviewOfAGameFromAUser);

// Create a review for a game from a user
router.post("/:gameId/:userId", createAReviewForAGameFromAUser);

module.exports = router;
