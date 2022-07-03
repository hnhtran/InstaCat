module.exports = {
    create
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

// ================== Helper Function ==================
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    )
}
