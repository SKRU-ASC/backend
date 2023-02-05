import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { Request, Response } from 'express'

import { ErrorResponse, SuccessResponse } from '../types/response'
import { prisma, reqValidation } from '../utils'

async function find(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { courseId } = req.query

    const subjects = await prisma.subject.findMany({
      include: {
        Course: { select: { name: true } },
      },
      where: { id: courseId?.toString() },
    })

    return res
      .status(200)
      .json({ status: 'success', data: subjects } as SuccessResponse)
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

    const { name, courseId } = req.body

    const newSubject = await prisma.subject.create({
      data: { name, courseId },
    })

    return res
      .status(201)
      .json({ status: 'success', data: newSubject } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function update(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { subjectId } = req.params
    const { name, courseId } = req.body

    const updatedSubject = await prisma.subject.update({
      data: { name, courseId },
      where: { id: subjectId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: updatedSubject } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function remove(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { subjectId } = req.params

    await prisma.subject.delete({
      where: { id: subjectId },
    })

    return res.status(204).end()
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

export default { find, create, update, remove }
