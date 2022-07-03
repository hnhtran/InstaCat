const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true, // unique email
        trim: true, // this transform trim whitespace
        lowercase: true, // this transform causes mongoose to convert the string to lowercase before saving
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }, 
}, {
    timestamps: true,
    // hash the password only, dont serialize/convert to string the password
    // we can compare the password in the controller by hash it again and compare 2 passwords
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})