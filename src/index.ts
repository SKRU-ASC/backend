import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

import config from './config'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' })
})

app.listen(config.environtments.port, () =>
  console.log(`Server is running on port: ${config.environtments.port}`)
)
