import { Options, diskStorage } from 'multer'
import { nanoid } from 'nanoid'

const storage = diskStorage({
  destination: process.env.UPLOAD_PATH || './uploads',
  filename: (req, file, cb) => cb(null, `${nanoid()}.jpg`),
})

const multerOption: Options = {
  limits: {
    fileSize: Number(process.env.UPLOAD_MAX_SIZE) || 2e7,
  },
  storage,
}

export default multerOption
