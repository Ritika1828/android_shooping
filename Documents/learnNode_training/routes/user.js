const express = require("express");
const router = require("express").Router();
const userController = require("../controllers/userController");
const JWT_authentication=require('../middleware/jwt_authentication');

router.get('/me',JWT_authentication , userController.me);
module.exports = router;