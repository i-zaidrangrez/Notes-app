import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
import noteRoutes from './routes/note.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/note',noteRoutes)

export default app;