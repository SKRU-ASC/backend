import { Router } from 'express'
import uploadRouter from './upload'
import subjectRoutes from './subject'
import courseRoutes from './course'

const router = Router()

router.use('/upload', uploadRouter)
router.use('/subjects', subjectRoutes)
router.use('/courses', courseRoutes)

export default router
