const jwt = require("jsonwebtoken");

const SECRET = "A1Z9";

const generateToken = (payload) =>
  jwt.sign(payload, SECRET, { expiresIn: "2h" });
const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = { generateToken, verifyToken };
