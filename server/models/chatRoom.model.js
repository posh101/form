const mongoose = require('mongoose')

const chatRoomSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'username is requires',
        unique: true
    }

    
})

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema)
module.exports = ChatRoom;