import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'

import config from './config'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use('/api', routes)

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' })
})

app.listen(config.environtments.port, () =>
  console.log(`Server is running on port: ${config.environtments.port}`)
)
