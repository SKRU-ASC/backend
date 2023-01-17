import { Router } from 'express'
import { checkSchema } from 'express-validator'

import {
  AddTargetGroupRequest,
  GetTargetGroupByIdRequest,
  UpdateTargetGroupRequest,
  RemoveTargetGroupRequest,
} from '../types/targetGroup'
import { targetGroupController } from '../controllers'

const targetGroupRoutes = Router()

targetGroupRoutes
  .get('/', targetGroupController.find)
  .get(
    '/:targetGroupId',
    checkSchema(GetTargetGroupByIdRequest),
    targetGroupController.findById
  )
  .post('/', checkSchema(AddTargetGroupRequest), targetGroupController.create)
  .put(
    '/:targetGroupId',
    checkSchema(UpdateTargetGroupRequest),
    targetGroupController.update
  )
  .delete(
    '/:targetGroupId',
    checkSchema(RemoveTargetGroupRequest),
    targetGroupController.remove
  )

export default targetGroupRoutes
