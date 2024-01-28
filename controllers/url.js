const shortid = require('shortid')
const urlModel = require('../models/url')
const { default: mongoose } = require('mongoose')

async function handleUrl(req, res){
    const body = req.body
    if(!body.url) return res.status(400).json({msg: "Url is required"})
    const shortID = shortid()
    await urlModel.create({
        shortID: shortID,
        redirectUrl: body.url,
        visited: [],
        createdBy: req.user._id
    })
    res.status(201).redirect("/")
}

module.exports = {handleUrl}