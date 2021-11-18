const User = require('../models/user')
const authService = require('../services/auth.service')
const msg = require('../helpers/messages')

const authController = {
    async login(req, res){
        try {
            const {email, password} = req.body
            if(!email || !password){
                res.status(400).json(msg.fieldsRequired)
            }
            let token = await authService.login(req.body)
            res.status(200).json(token)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async register(req, res){
        try {
            const user = new User(req.body)
            let token = await authService.register(user)
            res.status(200).json(token)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authController
