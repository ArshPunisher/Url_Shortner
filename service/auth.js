const jwt = require('jsonwebtoken')
const secret = "@r$h#2018"

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret)
}

function getUser(token){
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return null;
    }
}

module.exports = {setUser, getUser}