// const importedPool = require("../modals/db");
const helper = require("../helpers/validation");
const createUser = require("../modals/db");

function registration(req, res) {
  console.log(req.body.email);
  console.log("Done");
  createUser(req.body.email, req.body.username).catch((err) =>
    console.log(err)
  );
  res.status(200).send();
}

module.exports = { registration };
