const jwt = require('jsonwebtoken')

const Authorized = (req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token){
        res.status(403).json('unauthorized')
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body.user = decoded
        next()
    } catch (error) {
        res.status(400).json({msg: 'Invalid token'})
    }
}

module.exports = Authorized