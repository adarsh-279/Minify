const express = require('express')
const urlController = require('../controllers/url.controller')

const router = express.Router()

router.post('/create', urlController.createShortURL)

module.exports = router