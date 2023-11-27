//we will use pg library,
// which is a Node.js library for working with PostgreSQL databases
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mentors",
    password: "12345",
    //port
});

module.exports = pool;

//why pool?
//Performance:Connection pools reduce the overhead of creating connections.
//Resource Management:help manage the number of open connections to the database.
//Reuse