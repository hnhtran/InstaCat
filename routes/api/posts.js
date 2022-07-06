const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// api/posts/
router.get('/', postsCtrl.createPost)
router.get('/:id', postsCtrl.getPost)
router.put('/:id', postsCtrl.updatePost)
router.delete('/:id', postsCtrl.deletePost)
router.post('/:id/like', postsCtrl.likePost)

router.get('/', postsCtrl.index) // !need to define this

module.exports = router