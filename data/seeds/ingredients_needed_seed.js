exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_needed')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients_needed').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 2, measurement: 'Cups' },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: '' },
        { recipe_id: 2, ingredient_id: 6, quantity: 1, measurement: 'Tbsp' },
        { recipe_id: 2, ingredient_id: 1, quantity: 1, measurement: 'Cup' },
        { recipe_id: 2, ingredient_id: 3, quantity: 2, measurement: 'Slices' },
        { recipe_id: 3, ingredient_id: 3, quantity: 2, measurement: 'Slices' },
        { recipe_id: 3, ingredient_id: 4, quantity: 1, measurement: 'Can' },
        { recipe_id: 3, ingredient_id: 5, quantity: 3, measurement: 'Tbsp' }
      ]);
    });
};
