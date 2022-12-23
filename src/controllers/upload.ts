import { Request, Response } from 'express'
import config from '../config'

const { environtments } = config

async function create(req: Request, res: Response) {
  res.status(201).json({
    path: `http://localhost:${environtments.port}/uploads/${req.file?.filename}`,
  })
}

export default { create }
