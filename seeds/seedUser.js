const { User } = require("../models");
const { create } = require("../models/User");

async function createSuperUser() {
  await User.create({
    name: "Super",
    lastName: "User",
    password: "12345",
    email: "super.user@gmail.com",
    isAdmin: true,
  });
}

createSuperUser();
console.log("User Created!!");
