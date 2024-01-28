const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/URLshortner")

const urlSchema = new mongoose.Schema({
    shortID:{
        type: String,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true
    },
    visited: [{timestamp: Number}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {timestamps: true})

module.exports = mongoose.model('URL', urlSchema)