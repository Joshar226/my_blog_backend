import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db'
import contactRouter from './routes/ContactRoutes'
import { corsConfig } from './config/cors'

dotenv.config()

connectDB()

const app = express()
app.use(cors(corsConfig))

app.use(express.json())

//Routes
app.use('/api/contacts', contactRouter)

export default app