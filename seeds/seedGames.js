const { Game, Genres, Platform, Developer, Tag } = require("../models");
const games = require("./games");

async function unionOfGames(gameSeed) {
  const { genres, developers, platforms, tags, name } = gameSeed;

  const editGenres = await Genres.findAll({ where: { name: genres } });
  const editDevelopers = await Developer.findAll({
    where: { name: developers },
  });
  const editPlatforms = await Platform.findAll({ where: { name: platforms } });

  await Game.findOne({
    where: { name },
    include: [Genres, Developer, Platform, Tag],
  })
    .then((game) => {
      game.setGenres(editGenres);
      game.setDevelopers(editDevelopers);
      game.setPlatforms(editPlatforms);
    })
    .then(() => {
      return console.log("Finish");
    });
}
games.forEach((gameSeed) => {
  unionOfGames(gameSeed);
});
