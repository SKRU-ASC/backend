import { Router } from 'express'
import { checkSchema } from 'express-validator'

import {
  AddSubjectRequest,
  GetSubjectRequest,
  UpdateSubjectRequest,
  RemoveSubjectRequest,
} from '../types/subject'
import { subjectControllers } from '../controllers'

const subjectRoutes = Router()

subjectRoutes
  .get('/', checkSchema(GetSubjectRequest), subjectControllers.find)
  .post('/', checkSchema(AddSubjectRequest), subjectControllers.create)
  .put(
    '/:subjectId',
    checkSchema(UpdateSubjectRequest),
    subjectControllers.update
  )
  .delete(
    '/:subjectId',
    checkSchema(RemoveSubjectRequest),
    subjectControllers.remove
  )

export default subjectRoutes
