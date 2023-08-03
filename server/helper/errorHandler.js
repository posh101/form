function errorHandler(err, req, res, next) {
    if(err === 'Illegal arguements') {
        return res.status(400).json('Undefined!')
    }
}

module.exports = {
    errorHandler,
}