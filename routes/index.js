const express = require ("express");
const router = express.Router ();
const users = require ("./users");
const admin = require ("./admin")

router.use ("/user", users);
router.use ("/user/admin", admin);

module.exports = router;