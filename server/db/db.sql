-- Create a new database called 'pokemons'
CREATE DATABASE pokemons;

-- Create a new table called 'users'
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE CHECK ( username <> ''),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL CHECK (password <> '')
);