import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { prisma } from '../utils'

async function find(req: Request, res: Response) {
  try {
    const targetGroups = await prisma.targetGroup.findMany()

    return res.status(200).json({ target_groups: targetGroups })
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
    const { targetGroupId } = req.params

    const targetGroup = await prisma.targetGroup.findUnique({
      where: { id: targetGroupId },
    })

    return res.status(200).json({ target_group: targetGroup })
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
    const newTargetGroup = await prisma.targetGroup.create({
      data: { name },
    })

    return res.status(201).json({ target_group: newTargetGroup })
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
    const { targetGroupId } = req.params
    const { name } = req.body

    const updatedTargetGroup = await prisma.targetGroup.update({
      data: { name },
      where: { id: targetGroupId },
    })

    return res.status(200).json({ target_group: updatedTargetGroup })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { targetGroupId } = req.params

    await prisma.targetGroup.delete({
      where: { id: targetGroupId },
    })

    return res.status(204).end()
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export default { find, findById, create, update, remove }
