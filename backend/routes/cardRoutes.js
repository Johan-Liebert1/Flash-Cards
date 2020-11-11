import express from 'express'
import CardSet from '../models/cardSetModel.js'
import Card from '../models/cardModel.js'

const cardRouter = express.Router()

// /api/cardsets/:setId/cards

cardRouter.get('/:setId/cards', async (req, res) => {
    const set = await CardSet.findById(req.params.setId)

    if (!set) {
        res.status(404)
        res.json({ message : "Set not found" })
    }

    else {
        res.status(200)
        res.json(set.cards)
    }

})

// post only one card
cardRouter.post('/:setId/card', async (req, res) => {

    const {question, answer} = req.body

    const setExists = await CardSet.findById(req.params.setId)

    if (!setExists) {
        res.status(404)
        res.json({message : "Set not found"})
    }

    else {
        const createdCard = await Card.create({ question, answer })

        console.log(createdCard)

        setExists.cards.push(createdCard._id)
        await setExists.save()

        res.status(201)
        res.json({ message: "Card created successfully" })
    }

})


// post multiple cards
cardRouter.post('/:setId/cards', async (req, res) => {

    const { cards } = req.body // cards is an array
    
    const setExists = await CardSet.findById(req.params.setId)

    if (!setExists) {
        res.status(404)
        res.json({message : "Set not found"})
    }

    else {
        const createdCards = await Card.insertMany(cards)

        console.log(createdCards)
        
        for (let i = 0; i < createdCards.length; i++){
            setExists.cards.push(createdCards[i]._id)
        }
        
        await setExists.save()

        res.status(201)
        res.json({ message: "Card created successfully" })
    }

})

export default cardRouter