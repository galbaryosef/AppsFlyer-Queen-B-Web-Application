const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "queenb",
    password: "mysecretpassword",
    port: 5432,
});

module.exports = pool;