const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const postsCtrl = require('../../controllers/api/posts')

// POST /api/users
router.post('/', usersCtrl.create)
// POST /api/users/login
router.post('/login', usersCtrl.login)
// POST /api/users/changeUsername
router.post('/changeUsername', usersCtrl.changeUsername)

router.get('/profiles/:id', postsCtrl.getPosts) // show all posts

module.exports = router