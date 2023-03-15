const { User, Cart, Library } = require("../models");
const { generateToken } = require("../utils/token");

const userRegister = async (req, res, next) => {
  const { isAdmin, ...data } = req.body;

  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: { ...data },
  })

  if (created) {
    const cart = await Cart.create({

      owner: `${user.name} ${user.lastName}`
    });
    const library = await Library.create({ 
      
      owner: `${user.name} ${user.lastName}`
    });

    user.setCart(cart);
    user.setLibrary(library);

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

module.exports = { userRegister, userLogin };
