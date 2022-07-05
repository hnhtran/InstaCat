const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = mongoose.Schema({
    description: String,
    selectedFile: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)