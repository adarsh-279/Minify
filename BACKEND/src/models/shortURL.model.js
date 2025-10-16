const mongoose = require('mongoose')

const shortURLSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const shortURL = mongoose.model('shortURL', shortURLSchema)
module.exports = shortURL