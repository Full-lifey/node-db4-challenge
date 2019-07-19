exports.up = function(knex) {
  return knex.schema // ALWAYS RETURN
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 256);
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('category');
    })
    .createTable('ingredients_needed', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl.float('quantity').notNullable();
      tbl.string('measurement').notNullable();
    })
    .createTable('recipe_directions', tbl => {
      tbl.increments();
      tbl.integer('step_number', 64);
      tbl.string('instructions', 256).notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_directions')
    .dropTableIfExists('ingredients_needed')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
