const mongoose = require('mongoose');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

mongoose.connect(process.env.DATABASE_URL);
// console.log(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})