import { Request, Response } from 'express'
import { ErrorResponse, SuccessResponse } from '../types/response'
import { prisma } from '../utils'

async function find(req: Request, res: Response) {
  try {
    const activities = await prisma.activity.findMany({
      include: {
        Subject: { select: { name: true } },
        TargetGroupActivity: {
          select: { TargetGroup: { select: { name: true } } },
        },
      },
    })

    return res
      .status(200)
      .json({ status: 'success', data: activities } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function findById(req: Request, res: Response) {
  try {
    const { activityId } = req.params

    const activity = await prisma.activity.findUniqueOrThrow({
      include: {
        Subject: { select: { name: true } },
        TargetGroupActivity: {
          select: { TargetGroup: { select: { name: true } } },
        },
      },
      where: { id: activityId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: activity } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function create(req: Request, res: Response) {
  try {
    const { name, description, image, hours, price, subjectId } = req.body

    const newActivity = await prisma.activity.create({
      data: { name, description, image, hours, price, subjectId },
    })

    return res
      .status(201)
      .json({ status: 'success', data: newActivity } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function update(req: Request, res: Response) {
  try {
    const { activityId } = req.params
    const { name, description, image, hours, price, subjectId } = req.body

    const newActivity = await prisma.activity.update({
      data: { name, description, image, hours, price, subjectId },
      where: { id: activityId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: newActivity } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}
async function remove(req: Request, res: Response) {
  try {
    const { activityId } = req.params

    await prisma.activity.delete({
      where: { id: activityId },
    })

    return res.status(204).end()
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

export default { find, findById, create, update, remove }
