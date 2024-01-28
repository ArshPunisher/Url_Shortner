const usersModel = require('../models/users')
const { setUser } = require('../service/auth')

async function handleSignUp(req, res){
    const body = req.body
    if(!body.fullname || !body.email || !body.password) return res.status(400).json({msg: "all fields required..."})
    await usersModel.create({
        fullname: body.fullname,
        email: body.email,
        password: body.password
    })
    res.status(201).redirect('/')
}

async function handleLogin(req, res){
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({msg: "all fields required..."})
    const user = await usersModel.findOne({email, password})
    if(!user) return res.status(404).json({msg: "user not found"})
    const token = setUser(user)
    res.cookie("uid", token)
    res.redirect('/')
}

module.exports = {handleSignUp, handleLogin}