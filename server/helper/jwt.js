const {expressjwt:expressjwt} = require('express-jwt')
require('dotenv/config')

function authJwt() {
    const secret = process.env.SECRET
    return expressjwt({
      secret,
      algorithms: ['HS256'],
      isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/api\/chat\/(.*)/, methods: ['GET', 'OPTIONS'] },
            '/api/user/register',
            '/api/user/login'
        ]
    })
}

async function isRevoked(req, token) {
    if(token.payload.userId === false) {
        console.log('You must login')
        return true;
    }
    console.log('userId')
    return false;
}

module.exports = {
    authJwt,
}