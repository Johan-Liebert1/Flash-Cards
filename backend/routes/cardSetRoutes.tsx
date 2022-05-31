import express from 'express'

import CardSet from '../models/cardSetModel.js'
import protect from '../middlewares/authMiddleware.js'
import mongoose from 'mongoose'

const cardSetRouter = express.Router()

cardSetRouter.get('/', protect, async (req, res) => {
    
    const allSets = await CardSet.find({ user: req.user._id })

    res.json(allSets)

})


cardSetRouter.post('/', protect, async (req, res) => {
    try {
        // a user cannot have two sets with the same name
        // two users can have their own sets with the same name
        console.log('req.user', req.user)

        const setExists = await CardSet.findOne({ 
            user: mongoose.Types.ObjectId(req.user._id),
            setName: req.body.setName 
        })

        if (setExists) {
            res.status(404)
            res.json({ "message":"Set with that name already exists" })
        }

        else {
            const createdSet = await CardSet.create({ 
                user: req.user._id,
                setName : req.body.setName 
            })

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



cardSetRouter.get('/:setId', protect, async (req, res) => {
    try {
        const set = await CardSet.findOne({ 
            _id: req.params.setId,
            user: req.user._id
        })

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


cardSetRouter.put('/:setId', protect, async (req, res) => {
    // only set name can be updated

    const setExists = await CardSet.findOne({ 
        user: req.user._id,
        setName: req.body.setName 
    })

    if ( setExists && setExists._id !== mongoose.Types.ObjectId(req.params.setId) ) {
        res.status(400)
        res.json({ message : "Set with that name already exists" })
    }

    else 
    {
        try {
            const newSetName = req.body.setName

            const updatedSet = await CardSet.findOneAndUpdate({
                _id: req.params.setId,
                user: req.user._id
            }, {
                setName: newSetName
            }, { new: true })

            if (updatedSet){
                res.status(200)
                res.json({ "message": "Updated Successfully", newSet : updatedSet })
            }
            
            else {
                res.status(404)
                res.json({ message : "Set not found" })
            }

        }

        catch (error) {
            console.log(error)
        }
    }
    
})


cardSetRouter.delete('/:setId', protect, async (req, res) => {

    const setExisted = await CardSet.findOneAndDelete({
        _id : req.params.setId,
        user: req.user._id
    })

    
    if (setExisted){
        res.status(200)
        res.json({ message : "Set Deleted" })
    }

    else {
        res.status(404)
        res.json({ message : "Set not found" })
    }
})



export default cardSetRouter