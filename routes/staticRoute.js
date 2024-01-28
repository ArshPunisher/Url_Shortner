const express = require('express')
const router = express.Router()
const urlModel = require('../models/url')

router.get('/', async (req, res)=>{
    if(!req.user) return res.redirect('/login')
    const allurls = await urlModel.find({ createdBy: req.user._id })
    res.render('home', {urls: allurls})
})


router.get('/login', (req, res)=>{
    res.render('login')
})

router.get('/:shortID', async (req, res)=>{
    const shortID = req.params.shortID;
    const entry = await urlModel.findOneAndUpdate({shortID},
        {$push: {visited: {timestamp: Date.now()}}})
    if(!entry) return res.status(404).json({msg: "URL not found"})
    res.redirect(entry.redirectUrl)
})

module.exports = router;