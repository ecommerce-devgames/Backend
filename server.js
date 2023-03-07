const express = require("express");
const db = require("./db");
const { User } = require("./models");
const PORT = 3001;
const server = express();

db.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
  });
});
