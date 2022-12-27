import { Router } from 'express'

import { courseController } from '../controllers'

const courseRoutes = Router()

courseRoutes.post('/', courseController.newCourse)
courseRoutes.get('/', courseController.courses)
courseRoutes.get('/:id', courseController.course)
courseRoutes.patch('/:id', courseController.editCourse)
courseRoutes.delete('/:id', courseController.removeCourse)

export default courseRoutes
