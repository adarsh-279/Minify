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

    const fullShortURL = `${req.protocol}://${req.get("host")}/${nid}`;

    res.status(201).json({
        shortURL: fullShortURL,
        fullURL: newURL.fullURL,
    });
}

async function redirectShortURL(req, res) {
    const redirectURL = await shortURL.findOne({ shortURL: req.params.id })
    
    if (redirectURL) {
        redirectURL.clicks = (redirectURL.clicks || 0) + 1;
        await redirectURL.save();
        res.redirect(redirectURL.fullURL)
    } else {
        res.status(404).json({ message: 'URL not found' })
    }
}

async function deleteShortURL(req, res) {
    try {
        const { id } = req.params
        const user = req.user

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized access. Login first' })
        }

        const url = await shortURL.findOne({ _id: id })
        await shortURL.deleteOne({ _id: id });
        
        return res.status(200).json({ message: 'URL deleted sucessfully'})
    } catch (error) {
        return res.status(500).json({ message: 'Server error' })
    }
}

module.exports = {
    createShortURL,
    redirectShortURL,
    deleteShortURL,
}