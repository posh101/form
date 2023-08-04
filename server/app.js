const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')
const {errorHandler} = require('./helper/errorHandler')
const {authJwt} = require('./helper/jwt')
const cors = require('cors')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(errorHandler)
app.use(authJwt())

app.use('/api/user', userRouter)


module.exports = app;
