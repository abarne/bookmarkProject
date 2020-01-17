const router = require('express').Router();
const db = require('./main-model.js');

router.get('/', (req, res) => {
	db
		.find()
		.then((mainCats) => {
			res.status(200).json(mainCats);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the main categories', error: error });
		});
});

router.post('/add', (req, res) => {
	const newMainCat = req.body;
	db
		.add(newMainCat)
		.then((response) => {
			res.status(200).json({ message: 'New main category added' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error adding new main category' });
		});
});

router.post('/update/:id', (req, res) => {
	const newInfo = req.body;
	const id = req.params.id;
	db
		.update(id, newInfo)
		.then((response) => {
			res.status(200).json({ message: 'Main Category updated' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error updating main category' });
		});
});

router.post('/delete/:id', (req, res) => {
	const id = req.params.id;
	db
		.remove(id)
		.then((response) => {
			res.status(200).json({ message: 'Main category removed' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error deleting main category' });
		});
});

module.exports = router;
