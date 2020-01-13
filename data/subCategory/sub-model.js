const knex = require('../../database/dbConfig.js');

module.exports = {
	find,
	add,
	update,
	remove
};

function find() {
	return knex('subCategory').select('*');
}

function add(main) {
	return knex('subCategory').insert(main);
}

function update(id, obj) {
	return knex('subCategory').where('id', id).update(obj);
}

function remove(id) {
	return knex('subCategory').where('id', id).delete();
}
