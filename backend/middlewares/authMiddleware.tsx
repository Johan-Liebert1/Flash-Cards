import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'


const protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.userId)

            next()

            }

        catch (error) {
            res.status(401)
            res.json({message : "Error - Not authorized, Token Failed"})
        }

    }
    
    if (!token) {
        res.status(401)
        res.json({message : "Error - Not authorized"})
    }

}

export default protect
