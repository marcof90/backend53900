const Income = require('../models/income')

const incomeController = {
    add: async function(req, res){
        try {
            const income = new Income(req.body)
            await income.save()
            res.status(200).json(income)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    list: async function(req, res){
        try {
            const incomes = await Income.find({user: req.body.user})
            res.status(200).json(incomes)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    find: async function(req, res){
        try {
            const income = await Income.findById(req.params.id)
            res.status(200).json(income)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = incomeController