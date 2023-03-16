const { Review, User } = require("../models");

const getAllReviewsOfAGame = (req, res, next) => {
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
};

const getAReviewOfAGameFromAUser = (req, res, next) => {
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
};

const createAReviewForAGameFromAUser = (req, res, next) => {
  const { gameId, userId } = req.params;
  const { content, rating } = req.body;

  return Review.create({ content, rating, userId, gameId })
    .then((review) => res.status(201).send(review))
    .catch((err) => next(err));
};

module.exports = {
  getAllReviewsOfAGame,
  getAReviewOfAGameFromAUser,
  createAReviewForAGameFromAUser,
};
