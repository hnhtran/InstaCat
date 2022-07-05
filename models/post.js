const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = mongoose.Schema({
    description: String,
    selectedFile: String
})

module.exports = mongoose.model('Post', postSchema)