const express = require('express')
const createURLController = require('../controllers/createURL.controller')

const router = express.Router()

router.post('/create', createURLController.createShortURL)

module.exports = router