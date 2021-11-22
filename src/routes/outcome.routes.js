const express = require('express')
const router = express.Router()
const outcomeController = require('../controllers/outcome.controller')
const Auth = require('../middlewares/auth.middleware')

router.post('/', Auth, outcomeController.add)
router.get('/', Auth, outcomeController.list)
router.get('/:id', Auth, outcomeController.find)

module.exports = router