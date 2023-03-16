const { User } = require("../models");

async function createSuperUser() {
  await User.create({
    name: "Super",
    lastName: "User",
    password: "12345",
    email: "super.user@gmail.com",
    isAdmin: true,
  });
  console.log("Super User Created!!");
}

createSuperUser();
