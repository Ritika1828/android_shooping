const express = require('express');
const router = express.Router();
const JWT_authentication = require("../middleware/JWT_authentication")
const authController = require('../controller/auth');
const userController = require("../controller/user")

router.post("/registration" , authController.registration);
router.post("/login", authController.login);
//router.get('/me',JWT_authentication , userController.me);

module.exports = router;

