const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')


module.exports = {
    create,
    login,
    changeUsername
}


// login
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        // check user and password exist or not
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json( createJWT(user) )
    } catch(error) {
        res.status(400).json(error)
    }
}

//  create user from model
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)

        res.json(token)
    } catch(error) {
        res.status(400).json(error)
    }
}

// change username
async function changeUsername(req, res) {
    try {
        const newUsername = req.body.name;
        const newUser = await User.findOneAndUpdate(
            { email: req.body.email }, 
            { name: newUsername }, 
            { new: true })
        res.json( createJWT(newUser) )
    } catch(error) {
        res.status(400).json(error)
    }
}

// ================== Helper Function ==================
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    )
}
