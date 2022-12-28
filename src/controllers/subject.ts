import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { prisma } from '../utils'

async function find(req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { courseId } = req.query

    const subjects = await prisma.subject.findMany({
      include: {
        Course: { select: { name: true } },
      },
      where: { id: courseId?.toString() },
    })

    return res.status(200).json({ subjects })
  } catch (error) {
    return res.status(400).json({ errors })
  }
}

async function create(req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { name, courseId } = req.body
    const newSubject = await prisma.subject.create({
      data: { name, courseId },
    })

    return res.status(201).json({ subject: newSubject })
  } catch (error) {
    return res.status(400).json({ errors })
  }
}

async function update(req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { subjectId } = req.params
    const { name, courseId } = req.body

    const updatedSubject = await prisma.subject.update({
      data: { name, courseId },
      where: { id: subjectId },
    })

    return res.status(200).json({ subject: updatedSubject })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { subjectId } = req.params

    await prisma.subject.delete({
      where: { id: subjectId },
    })

    return res.status(204).end()
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { find, create, update, remove }
