import { Router } from 'express'
import uploadRouter from './upload'
import subjectRoutes from './subject'
import courseRoutes from './course'
import targetGroupRoutes from './targetGroup'
import activityRoutes from './activity'

const router = Router()

router.use('/upload', uploadRouter)
router.use('/subjects', subjectRoutes)
router.use('/courses', courseRoutes)
router.use('/target-group', targetGroupRoutes)
router.use('/activities', activityRoutes)

export default router
