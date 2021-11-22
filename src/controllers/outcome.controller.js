const Outcome = require('../models/outcome')

const outcomeController = {
    add: async function(req, res){
        try {
            const outcome = new Outcome(req.body)
            await outcome.save()
            res.status(200).json(outcome)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    list: async function(req, res){
        try {
            const outcomes = await Outcome.find({user: req.body.user})
            res.status(200).json(outcomes)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    find: async function(req, res){
        try {
            const outcome = await Outcome.findById(req.params.id)
            res.status(200).json(outcome)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = outcomeController