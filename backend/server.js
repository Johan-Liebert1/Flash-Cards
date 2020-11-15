import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

import { connectDB } from './config/db.js'
import cardSetRouter from './routes/cardSetRoutes.js'
import cardRouter from './routes/cardRoutes.js'
import singleCardRouter from './routes/singleCardRoute.js'
import userRouter from './routes/userRouter.js'

dotenv.config()

const app = express()
app.use(express.json())
connectDB()

const PORT = process.env.PORT || 5000

app.use('/api/cardsets', cardSetRouter)
app.use('/api/cardsets', cardRouter)
app.use('/api/cards', singleCardRouter)
app.use('/user', userRouter)


// this gives the absolute path
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
}

else {
    app.get("/", (req, res) => {
        res.json({ "message" : "API Connected..." })
    })
}


app.listen(PORT, () => console.log(`Server Listening on PORT : ${PORT}`))