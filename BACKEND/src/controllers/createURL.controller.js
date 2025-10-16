const shortURL = require('../models/shortURL.model')
const nanoid = require('nanoid').nanoid

async function createShortURL(req, res) {
    const { url } = req.body
    const nid = nanoid(7)
    if (!url) {
        return res.status(400).json({ message: 'URL is required' })
    }

    const isURLpresent = await shortURL.findOne({ shortURL: nid })
    if (isURLpresent) {
        return res.status(500).json({ message: 'Please try again' })
    }

    const newURL = await shortURL.create({
        fullURL: url,
        shortURL: nid
    })
}

module.exports = {
    createShortURL,
}