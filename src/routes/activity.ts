import { Router } from 'express'
import { checkSchema } from 'express-validator'

import {
  GetActivityByIdRequest,
  AddActivityRequest,
  UpdateActivityRequest,
  RemoveActivityRequest,
} from '../types/activity'
import { activityController } from '../controllers'

const activityRoutes = Router()

activityRoutes
  .get('/', activityController.find)
  .get(
    '/:activityId',
    checkSchema(GetActivityByIdRequest),
    activityController.findById
  )
  .post('/', checkSchema(AddActivityRequest), activityController.create)
  .put(
    '/:activityId',
    checkSchema(UpdateActivityRequest),
    activityController.update
  )
  .delete(
    '/:activityId',
    checkSchema(RemoveActivityRequest),
    activityController.remove
  )

export default activityRoutes
