const express = require('express')
const router = express.Router()
const {handleUrl} = require('../controllers/url')

router.post('/', handleUrl);

module.exports = router;