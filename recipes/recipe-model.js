const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  console.log('fetching recipes');
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes')
    .innerJoin('ingredients_needed as in', 'recipes.id', 'in.recipe_id')
    .innerJoin('ingredients as i', 'in.ingredient_id', 'i.id')
    .where({ 'recipes.id': recipe_id })
    .select('i.name', 'in.quantity', 'in.measurement');
}

function getInstructions(recipe_id) {
  return db('recipes')
    .innerJoin('recipe_directions as rd', 'recipes.id', 'rd.recipe_id')
    .where({ 'recipes.id': recipe_id })
    .select('rd.step_number', 'rd.instructions');
}
