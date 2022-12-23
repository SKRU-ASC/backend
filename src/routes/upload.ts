import { Router } from 'express'
import multer from 'multer'

import config from '../config'
import { uploadControllers } from '../controllers'

const upload = multer(config.multerOption)
const uploadRoutes = Router()

uploadRoutes.post('/', upload.single('image'), uploadControllers.create)

export default uploadRoutes
