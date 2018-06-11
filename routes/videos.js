import express from 'express'
import videosController from '../controllers/videos'

const router = express.Router()

router.get('/videos', videosController.index)
router.get('/videos/:id', videosController.getVideoById)

export default router