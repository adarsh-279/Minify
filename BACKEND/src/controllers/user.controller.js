const userModel = require('../models/user.model')

async function getUserProfile(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized. Please log in first.' });
        }

        const user = await userModel.findById(req.user._id).populate('urls')

        if (!user) {
            return res.status(404).json({ message: 'User not found'})
        }

        res.status(200).json({
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                urls: user.urls
            }
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error. Try again later!"})
    }
}

module.exports = {
    getUserProfile,
}