import express from 'express'
import linksRouter from './routes/links'
import cors from 'cors'

const app = express()

// use json
app.use(express.json())
app.use(cors())
app.use(linksRouter)

//routes
export default app