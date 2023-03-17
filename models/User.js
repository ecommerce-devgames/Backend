const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const db = require("../db");

class User extends Model {
  hash(password, hash) {
    return bcrypt.hash(password, hash);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (hash) => hash === this.password
    );
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    salt: {
      type: DataTypes.STRING,
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.addHook("beforeCreate", (user) => {
  user.salt = bcrypt.genSaltSync(8);

  return user
    .hash(user.password, user.salt)
    .then((hash) => (user.password = hash));
});

User.addHook("beforeUpdate", (user) => {
  if (user.changed("password")) {
    user.salt = bcrypt.genSaltSync(8);

    return user
      .hash(user.password, user.salt)
      .then((hash) => (user.password = hash));
  }
});

module.exports = User;
