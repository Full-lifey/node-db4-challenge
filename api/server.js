const express = require('express');

const server = express();

const recipeRouter = require('../recipes/recipe-router.js');

server.use(express.json());
server.use('/api/recipes', recipeRouter);

module.exports = server;
