const Post = require('../../models/post')
const mongoose = require('mongoose')
const User = require('../../models/user')

module.exports = {
    createPost,
    index,
    showPost,
    updatePost,
    deletePost,
    likePost
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
async function showPost(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
}
//update a post
async function updatePost(req, res) {
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
// delete a post
async function deletePost(req, res) {
    const userId = req.user._id
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        if (post.userId !== userId) {
            res.status(401).json({ message: 'Unauthorized delete' })
        } else {
            await Post.findByIdAndDelete(postId)
            res.json({ message: 'Post deleted' })
        }
    } catch (err) {
        res.json(err)
    }
}
// like or unlike a post
async function likePost(req, res) {
    const userId = req.user._id
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        // like: push, dislike: splice
        if (post.likes.includes(userId)) {
            const index = post.likes.indexOf(userId)
            post.likes.splice(index, 1)
        } else {
            post.likes.push(userId)
        }
        await post.save()
        res.json(post)
    } catch (err) {
        res.json(err)
    }
}