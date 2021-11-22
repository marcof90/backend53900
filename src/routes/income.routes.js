const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller')
const Auth = require('../middlewares/auth.middleware')

/**
 * @api {post} /incomes/ Add Income
 * @apiName AddIncome
 * @apiDescription Registrar un ingreso de dinero del usuario
 * @apiGroup Incomes
 */
router.post('/', Auth, incomeController.add)
router.get('/', Auth, incomeController.list)
router.get('/:id', Auth, incomeController.find)

module.exports = router