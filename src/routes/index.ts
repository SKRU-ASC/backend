import { Router } from 'express'
import uploadRouter from './upload'
import courseRoutes from './course'

const router = Router()

router.use('/upload', uploadRouter)
router.use('/course', courseRoutes)

export default router
