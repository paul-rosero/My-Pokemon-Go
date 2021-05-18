require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const index = require('./routes/index');
const usersRoute = require('./routes/users');
// const pokemonsRoute = require('./routes/pokemons');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use(usersRoute)
app.use('/api/v1', usersRoute);
// app.use('/api/v1', pokemonRoute);

module.exports = app;