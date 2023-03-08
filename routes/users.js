const express = require("express");
const router = express.Router();
const { generateToken, verifyToken } = require("../utils/token");

const { User } = require("../models");
const { validateToken } = require("../middleware/validateToken");

router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch(next());
});

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(404);

    user.validatePassword(password).then((validation) => {
      if (!validation) return res.sendStatus(401);
      const payload = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});
router.get("/me", validateToken, (req, res, next) => {
  res.send(req.user);
});

router.post("/logout", (req, res, next) => {
  res.clearCookie("token").sendStatus(204);
});

module.exports = router;

/* "/admin/games/create"
"admin/games/update"
"admin/users"
"admin/users/create"
"admin/users/update" */
