exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Cheese Quesidlla', description: '' },
        {
          name: 'Grilled Cheese',
          description: 'Simple Grilled Cheese Sandwich'
        },
        { name: 'Tuna Sandwich', description: 'Easy Tuna Sandwich Recipe' }
      ]);
    });
};
