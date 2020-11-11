import express from 'express'
import mongoose from 'mongoose'
import CardSet from '../models/cardSetModel.js'
import Card from '../models/cardModel.js'
import protect from '../middlewares/authMiddleware.js'

const cardRouter = express.Router()

// /api/cardsets/:setId/cards

cardRouter.get('/:setId/cards', protect, async (req, res) => {
    const set = await CardSet.findOne({
        _id: req.params.setId,
        user: req.user._id
    }).populate('cards')

    if (!set) {
        res.status(404)
        res.json({ message : "Set not found" })
    }

    else {
        res.status(200)
        res.json(set.cards)
    }

})


// post multiple cards
cardRouter.post('/:setId/cards', protect, async (req, res) => {

    const { cards } = req.body // cards is an array
    
    const setExists = await CardSet.findById({
        _id: req.params.setId,
        user: req.user._id
    })

    if (!setExists) {
        res.status(404)
        res.json({ message : "Set not found" })
    }

    else {
        const createdCards = await Card.insertMany(cards)
        
        for (let i = 0; i < createdCards.length; i++) {
            setExists.cards.push(createdCards[i]._id)
        }

        await setExists.save()

        res.status(201)
        res.json({ message: "Card created successfully" })
    }

})

cardRouter.put('/:setId/cards', (req, res) => {
    res.status(400)
    res.json({ message: "PUT not supported on this route" })
})

// delete all cards from a set
cardRouter.delete('/:setId/cards', protect, async (req, res) => {

    const setExists = await CardSet.findById({
        _id: req.params.setId,
        user: req.user._id
    })

    if (!setExists) {
        res.status(404)
        res.json({message : "Set not found"})
    }

    else {
        // iterate over setExists.cards in reverse and keep deleting the card 
        // as well as the card id from the array
        for (let i = setExists.cards.length - 1; i >= 0; i--) {
            await Card.findByIdAndDelete(setExists.cards[i])
            setExists.cards.pop()
        }
        setExists.save()

        res.status(200)
        res.json({messgae : "All cards Deleted"})
    }

})


// GET and PUT on a single card is done in singleCardRoutes.js


// post only one card
cardRouter.post('/:setId/card', protect, async (req, res) => {

    const {question, answer} = req.body

    const setExists = await CardSet.findById({
        _id: req.params.setId,
        user: req.user._id
    })

    if (!setExists) {
        res.status(404)
        res.json({message : "Set not found"})
    }

    else {
        const createdCard = await Card.create({ question, answer })

        setExists.cards.push(createdCard._id)
        await setExists.save()

        res.status(201)
        res.json({ message: "Card created successfully" })
    }

})


cardRouter.delete('/:setId/card/:cardId', async (req, res) => {
    const setExists = CardSet.findById({
        _id : req.params.setId,
        user: req.user._id
    })

    if (!setExists) {
        res.status(404)
        res.json({message: "Set not found"})
    }

    else {
        await setExists.updateOne({ 
            $pull : { cards : mongoose.Types.ObjectId(req.params.cardId) } 
        })

        await Card.findByIdAndDelete(req.params.cardId)

        res.status(200)
        res.json({message : "Card Deleted"})

    }
})



export default cardRouter