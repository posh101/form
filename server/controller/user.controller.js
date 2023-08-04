const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv/config')


async function createUser(req, res, next) {
  try {
    const {username, email, password} = req.body
    const usernameCheck = await User.findOne({username})
    if(usernameCheck) {
        return res.json({msg: "Username already exist", satus: false})
    }

    const emailCheck = await User.findOne({email})
    if(emailCheck) {
        return res.json({msg: "Email already exist", status: false})
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    const user = new User({
    username,
    email,
    password: hashPassword
})
await user.save()

if(!user) {
    return res.json({status: false, msg: "Missing required property"})
}

return res.send({status: true, user})

}catch(ex) {
    next(ex)
}

}

module.exports = {
    createUser,
}

