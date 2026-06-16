import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { createNotes, getNoteById, getNotes, updateNote } from '../controllers/note.controllers.js'
const router = express.Router()

router.post('/createnote' , authMiddleware , createNotes)
router.get('/getnote' , authMiddleware , getNotes)
router.get('/getnote/:id' , authMiddleware , getNoteById)
router.put('/updatenote/:id' , authMiddleware , updateNote)

export default router