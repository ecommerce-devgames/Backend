const express = require("express");
const { validateToken } = require("../middleware/validateToken");
const {
  userRegister,
  userLogin,
  userMe,
  userMeEdit,
  userLogout,
  allUsers,
  adminAccessToUser,
  adminDeleteAUser,
} = require("../controllers/users");

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/me", validateToken, userMe);

router.put("/me/edit", validateToken, userMeEdit);

router.post("/logout", userLogout);

router.get("/admin", validateToken, allUsers);

router.put("/admin/access/:id", validateToken, adminAccessToUser);

router.delete("/admin/delete/:id", validateToken, adminDeleteAUser);

module.exports = router;
