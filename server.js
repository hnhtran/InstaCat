const express = require('express');
const path = require('path')
const logger = require('morgan');
const bodyParser = require('body-parser');

// Always require and configure near the top
require('dotenv').config()
// Connect to the server
// Make sure that dotenv is already required
require('./config/database')

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(logger('dev'))
// body parser middleware - adds properties to req.body
app.use(express.json())
// middleware to server from the 'build' folder
app.use(express.static(path.resolve(__dirname, 'build')))

// Put API routes here, before the "catch all" route
// any routes leads to user now is shorten by '/' only in users router
app.use('/api/users', require('./routes/api/users'))

// Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn')
// app.use('/api/users/profiles', ensureLoggedIn, require('./routes/api/usersProfiles'))
app.use('/api/posts', require('./routes/api/posts'))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
// app.use('/', require('./routes/api/posts'))

// Configure express app to listen on port 3001
// to avoid conflicting with the react server
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Listening, express app on port ${port}`)
})