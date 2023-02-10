const express = require("express");
const authController = require("../controller/auth");
const router = express.Router();

router.post("/registration", authController.registration);

module.exports = router;
