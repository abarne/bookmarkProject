exports.up = function(knex) {
	return knex.schema.createTable('subCategory', (subCategory) => {
		subCategory.increments();

		subCategory.string('title', 255);
		subCategory
			.integer('mainId')
			.unsigned()
			.references('id')
			.inTable('mainCategory')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('subCategory');
};
