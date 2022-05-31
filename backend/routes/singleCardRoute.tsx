import express from 'express'
import Card from '../models/cardModel.js'

const singleCardRouter = express.Router()


singleCardRouter.get('/:cardId', async (req, res) => {
    const card = await Card.findById(req.params.cardId)

    if (!card) {
        res.status(404)
        res.json({message: "Card not found"})
    }

    else {
        res.status(200)
        res.json(card)
    }
})


singleCardRouter.put('/:cardId', async (req, res) => {
    const card = await Card.findById(req.params.cardId)

    if (!card) {
        res.status(404)
        res.json({message: "Card not found"})
    }

    else {
        const question = req.body.question ? req.body.question : card.question
        const answer = req.body.answer ? req.body.answer : card.answer

        await Card.findByIdAndUpdate(req.params.cardId, {question, answer})

        res.status(200)
        res.json({message: 'card updated'})
    }
})




export default singleCardRouter