const { User, Cart } = require("../models");
const { generateToken } = require("../utils/token");

const userRegister = async (req, res, next) => {
  const { isAdmin, ...data } = req.body;

  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: { ...data },
  }).catch((error) => next(error));

  if (created) {
    const cart = await Cart.create().catch((error) => next(error));

    cart.setUser(user);

    return res.sendStatus(201);
  }

  return res.sendStatus(403);
};

const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  return User.findOne({ where: { email } })
    .then((user) => {
      user.validatePassword(password).then((validation) => {
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
    .catch((err) => next(err));
};

const userMe = (req, res, next) => {
  res.send(req.user);
};

const userMeEdit = (req, res, next) => {
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
};

const userLogout = (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
};

const allUsers = (req, res, next) => {
  if (!req.user.isAdmin) res.sendStatus(401);
  return User.findAll()

    .then((users) => res.send(users))
    .catch((err) => next(err));
};

module.exports = {
  userRegister,
  userLogin,
  userMe,
  userMeEdit,
  userLogout,
  allUsers,
};
