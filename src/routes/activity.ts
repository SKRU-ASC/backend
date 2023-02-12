import { Router } from 'express'

import { activityController } from '../controllers'

const activityRoutes = Router()

activityRoutes
  .get('/', activityController.find)
  .get('/:activityId', activityController.findById)
  .post('/', activityController.create)
  .put('/:activityId', activityController.update)
  .delete('/:activityId', activityController.remove)

export default activityRoutes
