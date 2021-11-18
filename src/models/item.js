const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
    price: Number,
    name: String,
    description: String,
    isAvailable: Boolean
})

module.exports = mongoose.model('items', Item)