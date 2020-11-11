import express from 'express'
import mongoose from 'mongoose'

import Card from '../models/cardModel.js'
import CardSet from '../models/cardSetModel.js'

const cardSetRouter = express.Router()

cardSetRouter.get('/', async (req, res) => {
    const allSets = await CardSet.find({})

    res.json(allSets)

})


cardSetRouter.post('/', async (req, res) => {
    try {
        // a user cannot have two sets with the same name
        // two users can have their own sets with the same name
        const setExists = await CardSet.findOne({ setName: req.body.setName })

        if (setExists) {
            res.status(404)
            res.json({"message":"Set with that name already exists"})
        }

        else {
            const createdSet = await CardSet.create({ setName : req.body.setName })
            res.status(201)
            res.json(createdSet)
        }
    }

    catch (error) {
        res.json(error)
    }

})


cardSetRouter.put('/', async (req, res) => {
    res.json({ "message" : "PUT not supported on this route" })
})



cardSetRouter.get('/:setId', async (req, res) => {
    try {
        const set = await CardSet.findById(req.params.setId)

        if (!set) {
            res.status(404)
            res.json({"message": "Set not found"})
        }

        else {
            res.status(200)
            res.json(set)
        }
    }
    
    catch (error) {
        res.json(error)
    }

})


cardSetRouter.post('/:setId', (req, res) => {
    res.status(400)
    res.json({"message" : "POST not supported on this route"})
})


cardSetRouter.put('/:setId', async (req, res) => {
    // only set name can be updated

    const setExists = await CardSet.findOne({ setName: req.body.setName })

    if ( setExists ) {
        console.log('inside the if in if setExists')
        res.status(400)
        res.json({ message : "Set with that name already exists" })
    }

    else 
    {
        try {
            const newSetName = req.body.setName

            const updatedSet = await CardSet.findByIdAndUpdate(req.params.setId, {
                setName: newSetName
            }, { new: true })

            res.status(200)
            res.json({ "message": "Updated Successfully", newSet : updatedSet })

        }

        catch (error) {
            console.log(error)
        }
    }
    
})


cardSetRouter.delete('/:setId', async (req, res) => {
    await CardSet.findByIdAndDelete(req.params.setId)
    res.status(200)
    res.json({message : "Set Deleted"})
})



export default cardSetRouter