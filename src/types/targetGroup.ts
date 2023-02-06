import { Schema } from 'express-validator'

const AddTargetGroupRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
}

const GetTargetGroupByIdRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'targetGroupId must be UUID',
  },
}

const UpdateTargetGroupRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'targetGroupId must be UUID',
  },
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
}

const RemoveTargetGroupRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'targetGroupId must be UUID',
  },
}

export {
  GetTargetGroupByIdRequest,
  AddTargetGroupRequest,
  UpdateTargetGroupRequest,
  RemoveTargetGroupRequest,
}
