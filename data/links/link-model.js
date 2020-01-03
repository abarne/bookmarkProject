const knex = require('../../database/dbConfig.js');

module.exports = {
	find,
	add,
	update,
	remove
};

function find() {
	return knex('link').select('*');
}

function add(main) {
	return knex('link').insert(main);
}

function update(id, obj) {
	return knex('link').where('id', id).update(obj);
}

function remove(id) {
	return knex('link').where('id', id).delete();
}
