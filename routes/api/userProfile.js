const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/posts')

// POST /api/users/profiles

router.post('/', postsCtrl.createPost)
router.get('/:id', postsCtrl.getPosts) // show all posts

module.exports = router