const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')
const {errorHandler} = require('./helper/errorHandler')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use(errorHandler)

app.use('/api/user', userRouter)


module.exports = app;
