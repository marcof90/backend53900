const express = require('express')
const Item = require('../models/item')
const router = express.Router()
const Auth = require('../middlewares/auth.middleware')

/**
 * @api {post} /items Add item
 * @apiName AddItem
 * @apiGroup Items
 * @apiDescription Agrega un item a la base de datos con los campos 
 *  price, name, description, isAvailable
 * @apiParam {Number} price Precio del item que se va a crear
 * @apiParam {String} name Nombre del item
 * @apiParam {String} description descripción detallada del item
 * @apiParam {Boolean} isAvailable true si esta disponible, false en caso contrario
 * @apiParamExample {json} Request-Example
 *      x-www-form-urlenconded
 *  {
 *      "price":        15000,
 *      "name":         "Chorizo zenu",
 *      "description":  "paquete de 15 chorizos",
 *      "isAvailable":  true
 *  }
 * @apiSuccess {json} item item creado
 * @apiSuccessExample {json} Success-Response
 *  {
 *      "price": 5000,
 *      "name": "queso",
 *      "description": "libra de queso",
 *      "isAvailable": true,
 *      "_id": "6197b09e8e03b610fe53a83c",
 *      "__v": 0
 *  }
 */
router.post('/', async function(req, res){
    try {
        const item = new Item(req.body)
        await item.save()
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json(error)
    }
})

/**
 * @api {get} /items List items
 * @apiName ListItem
 * @apiGroup Items
 * @apiDescription Lista de items que se encuentran en la base de datos 
 * @apiPermission Auth
 * @apiHeader (Header) {String} x-auth-token token de autenticación
 * @apiHeaderExample {json} Request-Example
 *  {
 *      "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTkzYzAxNmM0ZWQ0M2FmMjg2NTRkMGQiLCJpYXQiOjE2MzcxNTk4NjUsImV4cCI6MTYzNzc2NDY2NX0.ScgiGOxe7nI7ywuxeHDkL5_wfQBJ5_zbPtGqOTe5YaQ"
 *  }
 * @apiSampleRequest http://localhost:3000/items
 * @apiSuccess {json} list lista de items
 * @apiSuccessExample {json} Success-Response
 *  [
 *      {
 *          "_id": "618e797d237266493f18c603",
 *          "price": 1500,
 *          "name": "yogurt",
 *          "description": "una descripción del item",
 *          "isAvailable": true,
 *          "__v": 0
 *      },
 *      {
 *          "_id": "618e79d4237266493f18c605",
 *          "price": 2500,
 *          "name": "leche",
 *          "description": "una descripción del item",
 *          "isAvailable": true,
 *          "__v": 0
 *      }
 *  ]
 * @apiError Forbidden
 * @apiErrorExample (403) {json} Error-Example
 *  HTTP/1.1 403 Forbidden
 *     unauthorized
 */
router.get('/', Auth, async function(req, res){
    try {
        const items = await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router