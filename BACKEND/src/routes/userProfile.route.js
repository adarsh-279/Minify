const express = require('express')
const userController = require('../controllers/user.controller')
const authUserMiddleware = require("../middlewares/auth.middleware");

const router = express.Router()

router.get("/", authUserMiddleware, userController.getUserProfile);

module.exports = router