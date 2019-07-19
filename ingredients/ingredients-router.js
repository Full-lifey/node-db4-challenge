const express = require('express');

const Recipes = require('../recipes/recipe-model.js');

const router = express.Router();

router.get('/:id/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipesByIngredients(req.params.id);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
