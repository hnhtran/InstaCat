const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// api/posts/ 

// show all posts
router.get('/', postsCtrl.getPosts)
router.post('/', postsCtrl.createPost)
router.get('/:id', postsCtrl.getPost)
router.put('/:id', postsCtrl.updatePost)
router.delete('/:id', postsCtrl.deletePost)
router.post('/:id/like', postsCtrl.likePost)


module.exports = router