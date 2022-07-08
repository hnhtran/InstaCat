const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6

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
    avatar:{
        type: String
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

// add a mongoose pre-save hook to hash the password anytime the password has changed
userSchema.pre('save', async function(next) {
    // 'this' is the user document that is being saved
    if (!this.isModified('password')) return next()
    // update the password with a computed hashed version
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS) // SALT_ROUNDS determine how much processing time it will take to perform the hash
    return next()
})

module.exports = mongoose.model('User', userSchema)