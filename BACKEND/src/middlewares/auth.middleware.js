const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function authUserMiddleware(req, res, next) {
    const token = req.cookies?.token

    if (!token) {
        req.user = null; // user not logged in
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await userModel.findById(decoded.id)
        req.user = user

        next()
    } catch (error) {
        req.user = null;
    }

}

module.exports = authUserMiddleware