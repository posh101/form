const express = require('express')
const {createUser} = require('../controller/user.controller')

const userRouter = express.Router()

userRouter.post('/register', createUser)
//userRouter.post('/login', login)
module.exports = userRouter;