require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const index = require('./routes/index');
// const usersRoute = require('./routes/users');
// const pokemonsRoute = require('./routes/pokemons');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());
app.use(session({
    key: "userId",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}));

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use('/api/v1', index);
// app.use('/api/v1', usersRoute);
// app.use('/api/v1', pokemonRoute);

module.exports = app;