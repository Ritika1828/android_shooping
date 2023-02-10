// const { default: knex } = require("knex");
const knex = require("../libraries/postgresql");
const uuid = require("uuid");

const db = require("../libraries/postgresql");
// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "admin",
//   host: "localhost",
//   database: "gradeup",
//   port: 5432,
// });

// knex("users").select("*").then(console.log, console.log);

function register(email, username) {
  console.log({ email, username });
  return knex("users")
    .insert({ userid: uuid.v4(), username, email })
    .returning("*")
    .catch((error) => console.log(error));
}
module.exports = register;
