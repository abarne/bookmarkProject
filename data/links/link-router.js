const router = require('express').Router();
const db = require('./link-model.js');

router.get('/', (req, res) => {
	db
		.find()
		.then((links) => {
			res.status(200).json(links);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the links' });
		});
});

router.post('/add', (req, res) => {
	const newLink = req.body;
	db
		.add(newLink)
		.then((response) => {
			res.status(200).json({ message: 'New link added' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error adding new link' });
		});
});

router.post('/update/:id', (req, res) => {
	const newInfo = req.body;
	const id = req.params.id;
	db
		.update(id, newInfo)
		.then((response) => {
			res.status(200).json({ message: 'Link updated' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error updating link' });
		});
});

router.post('/delete/:id', (req, res) => {
	const id = req.params.id;
	db
		.remove(id)
		.then((response) => {
			res.status(200).json({ message: 'link removed' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error deleting link' });
		});
});

module.exports = router;
