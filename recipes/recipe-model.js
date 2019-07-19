const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredients
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

function getRecipesByIngredients(ingredient_id) {
  return db('ingredients as i')
    .innerJoin('ingredients_needed as in', 'i.id', 'in.ingredient_id')
    .innerJoin('recipes as r', 'in.recipe_id', 'r.id')
    .where({ 'i.id': ingredient_id })
    .select('i.name', 'r.name');
}
