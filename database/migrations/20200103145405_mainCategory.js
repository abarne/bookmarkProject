exports.up = function(knex) {
	return knex.schema.createTable('mainCategory', (mainCategory) => {
		mainCategory.increments();

		mainCategory.string('title', 255).notNullable;
		mainCategory
			.integer('userId')
			.unsigned()
			.references('id')
			.inTable('users')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('mainCategory');
};
