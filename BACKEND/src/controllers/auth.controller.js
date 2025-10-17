const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { fullname, password, email } = req.body

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        return res.status(400).json({ message: 'User already exixts'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullname,
        password: hashedPassword,
        email
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_KEY)

    res.cookie('token', token),

    res.status(201).json({
        message: 'User registered sucessfully',
        user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    })
}

async function loginUser(req, res) {
    const { password, email } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password'})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_KEY)

    res.cookie('token', token),

    res.status(201).json({
        message: 'User login sucessfully',
        user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
    })
}

async function logoutUser(req, res) {
    res.clearCookie('token')
    res.status(200).json({ message: 'User logout sucessfully'})
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
}