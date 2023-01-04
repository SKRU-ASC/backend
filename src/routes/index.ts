import { Router } from 'express'
import uploadRouter from './upload'
import subjectRoutes from './subject'

const router = Router()

router.use('/upload', uploadRouter)
router.use('/subjects', subjectRoutes)

export default router
