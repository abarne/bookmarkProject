const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');

router.get('/', (req, res) => {
	Users.find()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error getting users' });
		});
});

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password);

	user.password = hash;

	Users.add(user)
		.then((saved) => {
			res.status(201).json(saved);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Error registering user' });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = getJwtToken(user);
				res.status(200).json({ token: `have a token`, token });
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			console.log('login error, ', error);
			res.status(500).json({ message: 'error logging in user' });
		});
});

function getJwtToken(user) {
	const payload = {
		username: user.username
	};
	console.log('payload', payload);
	const secret = process.env.JWT_SECRET || 'keep it secret and keep it safe';
	const options = {
		expiresIn: '1d'
	};
	return jwt.sign(payload, secret, options);
}

module.exports = router;
