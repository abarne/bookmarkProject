exports.up = function(knex) {
	return knex.schema.createTable('link', (link) => {
		link.increments();

		link.string('title', 255);
		link
			.integer('subId')
			.unsigned()
			.references('id')
			.inTable('subCategory')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return kenx.schema.dropTableIfExists('link');
};
