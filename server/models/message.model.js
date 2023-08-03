const mongoose = require('mongoose')
const ChatRoom = require('./chatRoom.model')
const User = require('./user.model')

const messageSchema = new mongoose.Schema({
    ChatRoom: {
       type: mongoose.Schema.Types.ObjectId,
       required: "ChatRoom is required!",
       ref: "ChatRoom"
    },

    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User is required',
        ref: "User"
    },
    
    message: {
        type: String,
        required: "Message is required"
    }
   
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message;