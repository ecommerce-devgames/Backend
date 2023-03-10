const { User } = require("./models");

User.create({
  name: "Super",
  lastName: "User",
  password: "12345",
  email: "super.user@gmail.com",
  isAdmin: true,
}).then(() => console.log("Super user created!!!!"));
