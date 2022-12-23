import { Router } from 'express'
import uploadRouter from './upload'

const router = Router()

router.use('/upload', uploadRouter)

export default router
