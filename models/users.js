const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/URLshortner")

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)