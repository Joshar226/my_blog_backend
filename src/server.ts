import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import contactRouter from './routes/ContactRoutes'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

//Routes
app.use('/api/contacts', contactRouter)

export default app