import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'
import cardSetRouter from './routes/cardSetRoutes.js'
import cardRouter from './routes/cardRoutes.js'
import singleCardRouter from './routes/singleCardRoute.js'

dotenv.config()

const app = express()
app.use(express.json())
connectDB()

const port = process.env.PORT || 5000

app.get('/', (req, res) => res.json({"message": "API Connected..."}))

app.use('/api/cardsets', cardSetRouter)
app.use('/api/cardsets', cardRouter)
app.use('/api/cards', singleCardRouter)

app.listen(port, () => console.log(`Server Listening on PORT : ${port}`))