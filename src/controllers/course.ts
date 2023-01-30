import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { prisma } from '../utils'

async function find(req: Request, res: Response) {
  try {
    const courses = await prisma.course.findMany()

    return res.status(200).json({ courses })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

async function findById(req: Request, res: Response) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { courseId } = req.params

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    return res.status(200).json({ course })
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
    const { name } = req.body
    const newCourse = await prisma.course.create({
      data: { name },
    })

    return res.status(201).json({ course: newCourse })
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
    const { courseId } = req.params
    const { name } = req.body

    const updatedCourse = await prisma.course.update({
      data: { name },
      where: { id: courseId },
    })

    return res.status(200).json({ course: updatedCourse })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { courseId } = req.params

    await prisma.course.delete({
      where: { id: courseId },
    })

    return res.status(204).end()
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { find, findById, create, update, remove }
