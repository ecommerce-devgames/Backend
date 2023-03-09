const express = require("express");
const { User } = require("../models");
const { generateToken } = require("../utils/token");
const { validateToken } = require("../middleware/validateToken");
const { fn, col } = require("sequelize");

const router = express.Router();

router.post("/register", (req, res, next) => {
  User.findOrCreate({
    where: {
      email: req.body.email,
    },
    defaults: {
      ...req.body,
    },
  })
    .then(([user, created]) => {
      if (created) res.sendStatus(201);
      else res.sendStatus(403);
    })
    .catch(() => next());
});

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;

  User.findOne({ where: { email } })

    .then((user) => {
      user
        .validatePassword(password)

        .then((validation) => {
          if (!validation) return res.sendStatus(401);

          const payload = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          };

          const token = generateToken(payload);

          res.cookie("token", token).send(payload);
        });
    })
    .catch(() => next());
});

router.get("/me", validateToken, (req, res, next) => {
  //const { name, lastName, email, isAdmin } = req.user;
  //const user = { name, lastName, email, isAdmin };
  res.send(req.user);
});

router.put("/me/edit", validateToken, (req, res, next) => {
  User.findOne({ where: { email: req.user.email } })

    .then((user) =>
      User.update(
        { ...req.body },
        { where: { email: user.email }, returning: true, individualHooks: true }
      )
    )
    .then(([affected, resulting]) => {
      const { id, name, lastName, email, isAdmin } = resulting[0];
      const payload = { id, name, lastName, email, isAdmin };
      const token = generateToken(payload);

      res.cookie("token", token).send(payload);
    })
    .catch(() => next());
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

router.get("/admin/all", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  User.findAll()

    .then((users) => res.send(users))
    .catch(() => next());
});

router.put("/admin/access", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  User.update(
    { isAdmin: fn("NOT", col("isAdmin")) },
    { where: { id: req.body.id }, returning: true }
  )
    .then(([affected, resulting]) => res.send(resulting[0].isAdmin))
    .catch(() => next());
});

router.delete("/admin/delete", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  User.destroy({ where: { email: req.body.email } })
    .then(() => res.sendStatus(204))
    .catch(() => next());
});

module.exports = router;
