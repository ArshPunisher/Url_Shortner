const express = require('express')
const route = express.Router()
const {handleLogin, handleSignUp} = require('../controllers/users')

route.post('/', handleSignUp)

route.post('/login', handleLogin)

module.exports = route;