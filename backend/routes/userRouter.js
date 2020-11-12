import express from 'express'
import User from '../models/userModel.js'
import getToken from '../auth/getToken.js'


const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {

    const userExists = await User.findOne({ username: req.body.username })

    if (userExists) {
        res.status(400)
        res.json({ message : "User with that username already exists" })
    }

    else {

        const user = await User.create(req.body)
        const token = getToken(user._id)

        res.status(201)
        res.json({
            username: user.username, 
            token
        })
    }

})


userRouter.post('/login', async (req, res) => {
    const userExists = await User.findOne({ username: req.body.username })

    if (userExists) {
        if (! await userExists.matchPassword(req.body.password) ){
            res.status(400)
            res.json({message : "Password does not match"})
        }

        else {
            res.status(200)
            const token = getToken(userExists._id)
            res.json({
                username: userExists.username,
                token
            })
        }
    }

    else {
        res.status(401)
        res.json({message : `No user with username : '${req.body.username}' found`})
    }

})



export default userRouter
