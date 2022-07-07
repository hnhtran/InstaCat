const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/posts')

// POST /api/users/profiles

router.get('/:id', postsCtrl.getPosts) // show all posts
router.post('/', postsCtrl.createPost)

module.exports = router