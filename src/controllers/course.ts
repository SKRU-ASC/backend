import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function newCourse(req: Request, res: Response) {
  const { name } = req.body

  try {
    const course = await prisma.course.create({
      data: {
        name,
      },
    })
    res.status(201).send(course)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function courses(req: Request, res: Response) {
  try {
    const courses = await prisma.course.findMany()
    res.status(200).send(courses)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function course(req: Request, res: Response) {
  try {
    const id = req.params.id

    const course = await prisma.course.findUniqueOrThrow({
      where: {
        id,
      },
    })
    res.status(200).send(course)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function editCourse(req: Request, res: Response) {
  try {
    const id = req.params.id
    const { name } = req.body

    const course = await prisma.course.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
    res.status(200).send(course)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function removeCourse(req: Request, res: Response) {
  try {
    const id = req.params.id

    await prisma.course.delete({
      where: {
        id,
      },
    })
    res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
}

export default { newCourse, courses, course, editCourse, removeCourse }
