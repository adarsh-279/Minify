const express = require('express')
const urlController = require('../controllers/url.controller')
const authUserMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/create', authUserMiddleware, urlController.createShortURL)
router.delete('/delete/:id', authUserMiddleware, urlController.deleteShortURL)

module.exports = router