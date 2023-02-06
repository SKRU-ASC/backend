import { Request } from 'express'
import { validationResult } from 'express-validator'

function reqValidation(req: Request) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw errors.array().map((error) => error.msg)
  }
}

export { reqValidation }
