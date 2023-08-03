const app = require('./app')
const http = require('http')
const {mongoConnect} = require('./mongodb')
require("dotenv/config")

const PORT = process.env.PORT || 7000;

const server = http.createServer(app)

async function startServer() {
    await mongoConnect()

    server.listen(PORT, () => {
        console.log(`Connected on port: ${PORT}`)
    })
}

startServer()
