import { Schema } from 'express-validator'

const AddTargetGroupRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
  },
}

const GetTargetGroupByIdRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
  },
}

const UpdateTargetGroupRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
  },
  name: {
    isString: true,
    in: 'body',
    optional: true,
  },
}

const RemoveTargetGroupRequest: Schema = {
  targetGroupId: {
    isUUID: true,
    in: 'params',
  },
}

export {
  GetTargetGroupByIdRequest,
  AddTargetGroupRequest,
  UpdateTargetGroupRequest,
  RemoveTargetGroupRequest,
}
