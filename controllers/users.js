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

module.exports = { userRegister, userLogin, userMe };
