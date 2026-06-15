import express from 'express'
import { getMe, loginUser, logout, registerUser } from '../controllers/auth.controllers.js'
import { getMeMiddleware } from '../middleware/auth.middleware.js'
const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',getMeMiddleware,getMe)
router.post('/logout',logout)

export default router