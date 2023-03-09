const express = require ("express");
const { User } = require ("../models");
const { generateToken } = require ("../utils/token");
const { validateToken } = require ("../middleware/validateToken");

const router = express.Router ();

router.post ("/register", (req, res, next) => {

	User.create (req.body)

		.then (() => res.sendStatus (201))
		.catch (() => next ());
});

router.post ("/login", (req, res) => {
		
	let { email, password } = req.body;

	User.findOne ({ where: { email } })
	
		.then (user => {

			user.validatePassword (password)
			
				.then (validation => {

					if (!validation) return res.sendStatus (401);

					const payload = {

						name: user.name,
						lastName: user.lastName,
						email: user.email,
						isAdmin: user.isAdmin,
					}

					const token = generateToken (payload);

					res.cookie ("token", token).send (payload);
				});
		})
		.catch (() => next ());
});

router.get ("/me", validateToken, (req, res) => {

	const { name, lastName, email, isAdmin } = req.user;
	const user = { name, lastName, email, isAdmin }
  	res.send (user);
});

router.put ("/edit", validateToken, (req, res) => {

	User.findOne ({ where: { email: req.user.email }})

		.then (user => User.update (
			
			{ ...req.body }, 
			{ where: { email: user.email }, returning: true, individualHooks: true }
		))
		.then (([affected, resulting]) => {
			
			const { name, lastName, email, isAdmin } = resulting [0];
			console.log (resulting [0])
			const payload = { name, lastName, email, isAdmin }
			const token = generateToken (payload);

			res.cookie ("token", token).send (payload);
		})
		.catch (() => next ());
});

router.post ("/logout", (req, res) => {

  	res.clearCookie ("token").sendStatus (204);
});

module.exports = router;