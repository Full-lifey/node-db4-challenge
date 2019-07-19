exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Mexican Cheese Mix', category: 'Cheese' },
        { name: 'Tortilla', category: 'Breads' },
        { name: 'White Bread', category: 'Breads' },
        { name: 'Canned Tuna', category: 'Meats' },
        { name: 'Mayonaise', category: 'Condiments' },
        { name: 'Butter', category: 'Condiments' }
      ]);
    });
};
