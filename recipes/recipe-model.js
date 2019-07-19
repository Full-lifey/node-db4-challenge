const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

async function getRecipes() {
  return await db('recipes');
}

async function getShoppingList(recipe_id) {
  return await db('recipes')
    .innerJoin('ingredients_needed as in', 'recipes.id', 'in.id')
    .where({ 'recipes.id': recipe_id })
    .select('in.name', 'in.quantity', 'in.measurement');
}
