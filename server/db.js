import Pg from "pg";
const Pool = Pg.Pool;

const pool = new Pool({
    user: "paulrosero",
    host: "localhost",
    port: 5432,
    database: "pokemon"
});

module.exports = pool;