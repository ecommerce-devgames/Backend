const express = require("express");
const { fn, col } = require("sequelize");
const { User, Cart } = require("../models");
const { validateToken } = require("../middleware/validateToken");
const {
  userRegister,
  userLogin,
  userMe,
  userMeEdit,
  userLogout,
} = require("../controllers/users");

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/me", validateToken, userMe);

router.put("/me/edit", validateToken, userMeEdit);

router.post("/logout", userLogout);

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
