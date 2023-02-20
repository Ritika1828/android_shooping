
const db = require("../libraries/db");
const uuid = require("uuid");
const crypto = require("crypto");

async function getUserByEmail(email) {
  return db("users")
    .select("*")
    .where({ email })
    .then((rows) => Array.isArray(rows) && rows[0]);
}

async function createUser({ username, email }) {
  return db("users")
    .insert({
      userid: uuid.v4(),
      username,
      email,
    })
    .returning("*");
}

async function authUser(email, password) {
  const passwordHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  console.log(email, password, passwordHash);
  return db("auth_email")
    .returning("*")
    .insert({
      email,
      password: passwordHash,
    })
    .catch(console.log);
}

async function getPassword(email) {
  return db("auth_email")
    .select("password")
    .where({ email })
    .then((rows) => Array.isArray(rows) && rows[0] && rows[0].password);
}

async function getUserById(userid){
    console.log(userid)
    return knex("users")
       .select("*")
       .where({ userid })
       .then((rows) => {
         return( (Array.isArray(rows) && rows[0]) );
       });
};





function createTime(email){
  var TimeStamp = new Date().getTime()
  return knex("users").insert({TimeStamp,email}).returning("*");
}
function LoginCheck(email){
  var TimeStamp = new Date().getTime()
  TimeStamp=TimeStamp-1*60*1000
  return  knex.raw("select email from userlogin where email=? and time>=?",[email,TimeStamp])
}
   




module.exports = { getUserByEmail, createUser, authUser, getPassword , getUserById,createTime,LoginCheck};
