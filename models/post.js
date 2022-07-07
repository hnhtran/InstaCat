const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    likes: [],
    description: {
        type:   String,
        required: true
    },
    image: String,
    updatedAt: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)