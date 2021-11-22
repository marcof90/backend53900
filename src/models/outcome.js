const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Outcome = new Schema({
    value: {
        type: Number,
        min: 1000,
        max: 150000000
    },
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('outcomes', Outcome)