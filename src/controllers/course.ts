import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { Request, Response } from 'express'

import { ErrorResponse, SuccessResponse } from '../types/response'
import { prisma, reqValidation } from '../utils'

async function find(req: Request, res: Response) {
  try {
    const courses = await prisma.course.findMany()

    return res
      .status(200)
      .json({ status: 'success', data: courses } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function findById(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { courseId } = req.params

    const course = await prisma.course.findUniqueOrThrow({
      where: { id: courseId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: course } as SuccessResponse)
  } catch (error) {
    // need to refactor later
    if (error instanceof PrismaClientKnownRequestError) {
      return res
        .status(400)
        .json({ status: 'error', message: error.name } as ErrorResponse)
    }

    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function create(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { name } = req.body
    const newCourse = await prisma.course.create({
      data: { name },
    })

    return res
      .status(201)
      .json({ status: 'success', data: newCourse } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function update(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { courseId } = req.params
    const { name } = req.body

    const updatedCourse = await prisma.course.update({
      data: { name },
      where: { id: courseId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: updatedCourse } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function remove(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { courseId } = req.params

    await prisma.course.delete({
      where: { id: courseId },
    })

    return res.status(204).end()
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

export default { find, findById, create, update, remove }
