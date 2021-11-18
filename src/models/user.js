const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: {
        type: String,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    registerDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', User)