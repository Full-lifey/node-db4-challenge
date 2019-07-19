exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_directions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_directions').insert([
        {
          step_number: 1,
          instructions: 'Warm up the pan on medium-high.',
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions:
            'Measure cheese and place on half of the tortilla. Then fold the tortilla.',
          recipe_id: 1
        },
        {
          step_number: 3,
          instructions:
            'Place tortilla and cheese on the pan, it should be sizzling. Once tortilla is crispy then flip and continue until cheese is melted. Then plate',
          recipe_id: 1
        },
        {
          step_number: 1,
          instructions: 'Warm up the pan on medium-high with the butter.',
          recipe_id: 2
        },
        {
          step_number: 2,
          instructions:
            'Measure cheese and place on white bread. Place sandwhich in the pan. Brown on both sides.',
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions:
            'In a bowl, mix tuna fish and mayonaise. Add any spices you like',
          recipe_id: 3
        },

        {
          step_number: 2,
          instructions:
            'Place tuna on bread. Add toppings if wanted (lettuce, tomato, pickles, etc.).',
          recipe_id: 3
        }
      ]);
    });
};
