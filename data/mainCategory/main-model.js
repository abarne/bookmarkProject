const knex = require('../../database/dbConfig.js');

module.exports = {
	find,
	add,
	update,
	remove,
	findById
};

function find() {
	return knex('mainCategory').select('*');
}

function add(main) {
	return knex('mainCategory').insert(main);
}

function findById(id) {
	return knex('mainCategory').where('id', id);
}

function update(id, obj) {
	return knex('mainCategory').where('id', id).update(obj);
}

function remove(id) {
	return knex('mainCategory').where('id', id).delete();
}
