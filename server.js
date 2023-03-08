const express = require("express");
const db = require("./db");
const cookieParser = require ('cookie-parser');
const routes = require ("./routes");
const { User } = require("./models");
const PORT = 3001;
const server = express();

server.use (cookieParser ());
server.use ("/api", routes);

db.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
  });
});
