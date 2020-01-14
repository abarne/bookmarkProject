const router = require('express').Router();
const db = require('./sub-model.js');

router.get('/:id', (req, res) => {
	const id = req.params.id;
	db
		.find(id)
		.then((subCats) => {
			res.status(200).json(subCats);
		})
		.catch((error) => {
			res.status(500).json({ message: 'There was an error retrieving the sub categories' });
		});
});

router.post('/add', (req, res) => {
	const newSubCat = req.body;
	db
		.add(newSubCat)
		.then((response) => {
			res.status(200).json({ message: 'New sub category added' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error adding new sub category' });
		});
});

router.post('/update/:id', (req, res) => {
	const newInfo = req.body;
	const id = req.params.id;
	db
		.update(id, newInfo)
		.then((response) => {
			res.status(200).json({ message: 'Sub Category updated' });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: error });
		});
});

router.post('/delete/:id', (req, res) => {
	const id = req.params.id;
	db
		.remove(id)
		.then((response) => {
			res.status(200).json({ message: 'Sub category removed' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Error deleting sub category' });
		});
});

module.exports = router;
