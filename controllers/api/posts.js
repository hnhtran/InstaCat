const Post = require('../../models/post')

module.exports = {
    index,
    show
}

async function index(req, res) {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
}

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
}