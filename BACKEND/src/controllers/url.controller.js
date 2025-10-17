const shortURL = require('../models/shortURL.model')
const nanoid = require('nanoid').nanoid

function normalizeURL(url) {
    if (!/^https?:\/\//i.test(url)) {
    return "https://" + url;
    }
    return url;
}

async function createShortURL(req, res) {
    let { url } = req.body
    const nid = nanoid(7)
    if (!url) {
        return res.status(400).json({ message: 'URL is required' })
    }

    url = normalizeURL(url);

    const isURLpresent = await shortURL.findOne({ shortURL: nid })
    if (isURLpresent) {
        return res.status(500).json({ message: 'Please try again' })
    }

    const newURL = await shortURL.create({
        fullURL: url,
        shortURL: nid,
        userId: req.user ? req.user._id : null
    })
}

async function redirectShortURL(req, res) {
    const redirectURL = await shortURL.findOne({ shortURL: req.params.id })
    
    if (redirectURL) {
        res.redirect(redirectURL.fullURL)
    } else {
        res.status(404).json({ message: 'URL not found' })
    }
}

module.exports = {
    createShortURL,
    redirectShortURL,
}