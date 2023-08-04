function errorHandler(err, req, res, next) {
    if(err.name === 'Illegal arguements') {
        return res.status(400).json('Undefined!')
    }

    if(err.name === 'UnauthorizedError') {
        return res.status(400).json('Unauthorized user')
    }
}

module.exports = {
    errorHandler,
}