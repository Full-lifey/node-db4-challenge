const express = require('express');

const server = express();

const recipeRouter = require('../recipes/recipe-router.js');
const ingredientsRouter = require('../ingredients/ingredients-router.js');

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;
