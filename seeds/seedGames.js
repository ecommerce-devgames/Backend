const { Game, Genres, Platform, Developer } = require("../models");
const games = require("./games");

async function unionOfGames(gameSeed) {
  const { genres, developers, platforms, name } = gameSeed;
  let editGenres, editDevelopers, editPlatforms, game;
  try {
    editGenres = await Genres.findAll({ where: { name: genres } });
    editDevelopers = await Developer.findAll({
      where: { name: developers },
    });
    editPlatforms = await Platform.findAll({ where: { name: platforms } });

    game = await Game.findOne({
      where: { name },
      include: [Genres, Developer, Platform],
    });

    game.setGenres(editGenres);
    game.setDevelopers(editDevelopers);
    game.setPlatforms(editPlatforms);
  } catch (error) {
    return console.log(error);
  }
}

games.forEach((gameSeed) => {
  unionOfGames(gameSeed);
});
return console.log("Creating The Relationships");
