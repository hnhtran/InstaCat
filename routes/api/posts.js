const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// GET /api/posts
router.get('/', postsCtrl.index) // !need to define this
// GET /api/posts/:id
router.get('/:id', postsCtrl.getPost)

module.exports = router