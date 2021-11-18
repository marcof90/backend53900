const express = require('express')
const Item = require('../models/item')
const router = express.Router()
const Auth = require('../middlewares/auth.middleware')

router.post('/', async function(req, res){
    try {
        const item = new Item(req.body)
        await item.save()
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/', Auth, async function(req, res){
    try {
        const items = await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router