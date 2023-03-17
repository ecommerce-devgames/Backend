const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Review extends Model {}

Review.init(
  {
    content: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 5,
        min: 0,
      },
    },
  },
  {
    sequelize: db,
    modelName: "review",
  }
);

module.exports = Review;
