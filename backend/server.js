import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'
import cardSetRouter from './routes/cardSetRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
connectDB()

const port = process.env.PORT || 5000

app.get('/', (req, res) => res.json({"message": "API Connected..."}))

app.use('/api/cardsets', cardSetRouter)

app.listen(port, () => console.log(`Server Listening on PORT : ${port}`))