const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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
} = require("./models");

const PORT = 3001;
const server = express();

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
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
