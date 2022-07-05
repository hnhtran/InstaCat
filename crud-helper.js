// node REPL instructions
// this module is used for testing models, etc.
// this module is not run as part of Express app, its //!external to it
// connect to database
require('dotenv').config()
require('./config/database')

// require mongoose models
// const User = require('./models/user')
// const Post = require('./models/post')
// const Comment = require('./models/comment')

// Local variables will come in handy for holding retrieved documents
let user, post, comment
let users, posts, comments
