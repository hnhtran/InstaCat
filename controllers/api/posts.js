const Post = require('../../models/post')
const mongoose = require('mongoose')
const User = require('../../models/user')

module.exports = {
    createPost,
    index,
    show,
}
// createPost
async function createPost(req, res) {
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
}

// show all posts
async function index(req, res) {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
}
// get/show a post by id
async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
}
//update a post
async function update(req, res) {
    const userId = req.user._id
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        if (post.userId !== userId) {
            res.status(401).json({ message: 'Unauthorized' })
        } else {
            const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true })
            res.json(updatedPost)
        }
    } catch (err) {
        res.json(err)
    }
}