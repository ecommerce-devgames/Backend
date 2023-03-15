const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const routes = require("./routes");

const {
  User,
  Game,
  Platform,
  Genres,
  Tag,
  Developer,
  Cart,
  Review,
} = require("./models");

const PORT = process.env.PORT;
const server = express();

const corsOptions = {
  credentials: true,
  origin: process.env.CORS_ORIGIN,
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(cookieParser());

server.use("/api", routes);

server.use("/api", (req, res) => res.sendStatus(404));

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  console.log("Data Base Connect");

  server.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
  });
});
