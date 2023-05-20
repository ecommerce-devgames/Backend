const { fn, col } = require("sequelize");
const { User, Cart, Library } = require("../models");
const { generateToken } = require("../utils/token");

const userRegister = async (req, res, next) => {
  const { isAdmin, ...data } = req.body;
  let user, created, cart, library;
  try {
    [user, created] = await User.findOrCreate({
      where: { email: data.email },
      defaults: { ...data },
    });

    if (created) {
      cart = await Cart.create({
        owner: `${user.name} ${user.lastName}`,
      });
      library = await Library.create({
        owner: `${user.name} ${user.lastName}`,
      });
      cart.setCart(user);
      library.setLibrary(user);
    }
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.sendStatus(201);
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  let user, validation, payload, token;
  try {
    user = await User.findOne({ where: { email } });
    validation = await user.validatePassword(password);
    console.log("validation ==>>", validation);
    if (!validation) return res.sendStatus(401);
    payload = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    token = generateToken(payload);
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.cookie("token", token).send(payload);
};

const userMe = (req, res, next) => {
  res.send(req.user);
};

const userMeEdit = async (req, res, next) => {
  let user, affected, resulting, payload, token;
  try {
    user = await User.findOne({ where: { email: req.user.email } });
    [affected, resulting] = await User.update(
      { ...req.body },
      { where: { email: user.email }, returning: true, individualHooks: true }
    );
    const { id, name, lastName, email, isAdmin } = resulting[0];
    payload = { id, name, lastName, email, isAdmin };
    token = await generateToken(payload);
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.cookie("token", token).send(payload);
};

const userLogout = (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
};

const allUsers = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let users;
  try {
    users = await User.findAll();
  } catch (error) {
    return res.send(error).status(400);
  }

  return res.send(users).status(200);
};

const adminAccessToUser = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  let affected, resulting;
  try {
    [affected, resulting] = await User.update(
      { isAdmin: fn("NOT", col("isAdmin")) },
      { where: { id: req.params.id }, returning: true }
    );
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.send(resulting[0].isAdmin);
};

const adminDeleteAUser = async (req, res, next) => {
  if (!req.user.isAdmin) return res.sendStatus(401);
  try {
    await User.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.send(error).status(400);
  }
  return res.send("User Deleted").status(200);
};

module.exports = {
  userRegister,
  userLogin,
  userMe,
  userMeEdit,
  userLogout,
  allUsers,
  adminAccessToUser,
  adminDeleteAUser,
};
