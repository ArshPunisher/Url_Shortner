const express = require('express')
const app = express()
const path = require('path')
const staticRoute = require('./routes/staticRoute')
const url = require('./routes/url')
const users = require('./routes/users')
const cookieParser = require('cookie-parser')
const { isLoggedIn, checkAuth } = require('./middlewares/auth')

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/', checkAuth, staticRoute)
app.use('/url', isLoggedIn, url)
app.use('/users', users)

app.listen(3000, ()=>{
    console.log('Listening at PORT http://localhost/3000')
})