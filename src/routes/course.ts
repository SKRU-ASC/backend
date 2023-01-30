import { Router } from 'express'
import { checkSchema } from 'express-validator'

import {
  AddCourseRequest,
  GetCourseByIdRequest,
  UpdateCourseRequest,
  RemoveCourseRequest,
} from '../types/course'
import { courseControllers } from '../controllers'

const courseRoutes = Router()

courseRoutes
  .get('/', courseControllers.find)
  .get(
    '/:courseId',
    checkSchema(GetCourseByIdRequest),
    courseControllers.findById
  )
  .post('/', checkSchema(AddCourseRequest), courseControllers.create)
  .put('/:courseId', checkSchema(UpdateCourseRequest), courseControllers.update)
  .delete(
    '/:courseId',
    checkSchema(RemoveCourseRequest),
    courseControllers.remove
  )

export default courseRoutes
