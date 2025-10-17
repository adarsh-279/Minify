const express = require('express')
const urlController = require('../controllers/url.controller')
const authUserMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/create', authUserMiddleware, urlController.createShortURL)

module.exports = router