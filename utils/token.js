const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

const generateToken = (payload) =>
  jwt.sign(payload, SECRET, { expiresIn: "2h" });
const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = { generateToken, verifyToken };
