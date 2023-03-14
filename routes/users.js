const express = require("express");
const { fn, col } = require("sequelize");
const { User, Cart } = require("../models");
const { generateToken } = require("../utils/token");
const { validateToken } = require("../middleware/validateToken");
const { userRegister, userLogin } = require("../controllers/users");

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/me", validateToken, (req, res, next) => {
  res.send(req.user);
});

router.put("/me/edit", validateToken, (req, res, next) => {
  return User.findOne({ where: { email: req.user.email } })
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
    .catch((err) => next(err));
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
});

router.get("/admin/all", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  return User.findAll()

    .then((users) => res.send(users))
    .catch((err) => next(err));
});

router.put("/admin/access/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  return User.update(
    { isAdmin: fn("NOT", col("isAdmin")) },
    { where: { id: req.params.id }, returning: true }
  )
    .then(([affected, resulting]) => res.send(resulting[0].isAdmin))
    .catch((err) => next(err));
});

router.delete("/admin/delete/:id", validateToken, (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  return User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => next(err));
});

module.exports = router;
