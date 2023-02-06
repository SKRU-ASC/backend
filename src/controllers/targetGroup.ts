import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { Request, Response } from 'express'

import { ErrorResponse, SuccessResponse } from '../types/response'
import { prisma, reqValidation } from '../utils'



async function find(req: Request, res: Response) {
  try {
    const targetGroups = await prisma.targetGroup.findMany()

    return res
      .status(200)
      .json({ status: 'success', data: targetGroups } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function findById(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { targetGroupId } = req.params

    const targetGroup = await prisma.targetGroup.findUnique({
      where: { id: targetGroupId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: targetGroup } as SuccessResponse)
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
    const newTargetGroup = await prisma.targetGroup.create({
      data: { name },
    })

    return res
      .status(200)
      .json({ status: 'success', data: newTargetGroup } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function update(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { targetGroupId } = req.params
    const { name } = req.body

    const updatedTargetGroup = await prisma.targetGroup.update({
      data: { name },
      where: { id: targetGroupId },
    })

    return res
      .status(200)
      .json({ status: 'success', data: updatedTargetGroup } as SuccessResponse)
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

async function remove(req: Request, res: Response) {
  try {
    reqValidation(req)

    const { targetGroupId } = req.params

    await prisma.targetGroup.delete({
      where: { id: targetGroupId },
    })

    return res.status(204).end()
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'error', message: error } as ErrorResponse)
  }
}

export default { find, findById, create, update, remove }
