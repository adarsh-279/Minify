const express = require('express')
const urlController = require('../controllers/url.controller')

const router = express.Router()

router.get('/:id', urlController.redirectShortURL)

module.exports = router