const express = require ("express");
const { fn, col } = require("sequelize");
const { User } = require ("../models");

const router = express.Router ();

router.get ("/all", (req, res) => {

	User.findAll ()
	
		.then (users => res.send (users))
		.catch (() => next ());
});

router.put ("/access", (req, res) => {

	User.update ( 
		
		{ isAdmin: fn ("NOT", col ("isAdmin")) }, 
		{ where: { id: req.body.id }, returning: true }
	)
		.then (([affected, resulting]) => res.send (resulting [0].isAdmin))
});

router.delete ("/delete", (req, res) => {	

	User.destroy ({ where: { id: req.body.id }})

		.then (() => res.sendStatus (204))
});

module.exports = router;