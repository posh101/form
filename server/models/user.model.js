const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },

    confirmPassword: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)
module.exports = User;