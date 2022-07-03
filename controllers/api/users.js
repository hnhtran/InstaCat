module.exports = {
    create
}

//  create user from model
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createdJWT(user)
        
        res.json(token)
    } catch(error) {
        res.status(400).json(error)
    }
}