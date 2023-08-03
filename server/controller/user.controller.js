const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv/config')


async function createUser(req, res) {
   try {
    const name = await User.findOne({username: req.body.username})
    if(name) {
        res.status(400).send('Username already exist')
    }

    const email = await User.findOne({email: req.body.email})
    if(email) {
        res.status(400).send('Email already exist')
    }

    const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
    })
    await user.save()

    if(!user) {
        res.status(400).json({success: false, message: 'Missing required property'})
    }

    else {
        return res.status(201).send(user)
    }

   }catch(error) {
    console.log(error)
   }
}

async function login(req, res) {
    try {
        
        const user = await User.findOne( {email: req.body.email})
        if(!user) {
            res.status(400).json({message: 'Please type your email or password'})
        }

     const SECRET = process.env.SECRET
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
            userId: user.id,
        },
        SECRET,
        {expiresIn: '1d'}
       
    )
    return res.status(200).send({ email: user.email, token: token})
    }

    }catch(error) {
        console.log(error)
    }

}

module.exports = {
    createUser,
    login,

}

