import { Schema } from 'express-validator'

const GetActivityByIdRequest: Schema = {
  activityId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'activityId must be UUID',
  },
}

const AddActivityRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
  description: {
    isString: true,
    in: 'body',
    errorMessage: 'description must be string',
  },
  image: {
    isString: true,
    in: 'body',
    errorMessage: 'image must be string',
  },
  hours: {
    isNumeric: true,
    in: 'body',
    errorMessage: 'hours must be number',
  },
  price: {
    isNumeric: true,
    in: 'body',
    errorMessage: 'price must be number',
  },
  subjectId: {
    isUUID: true,
    in: 'body',
    errorMessage: 'subjectId must be UUID',
  },
}

const UpdateActivityRequest: Schema = {
  activityId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'activityId must be UUID',
  },
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
  description: {
    isString: true,
    in: 'body',
    errorMessage: 'description must be string',
  },
  image: {
    isString: true,
    in: 'body',
    errorMessage: 'image must be string',
  },
  hours: {
    isNumeric: true,
    in: 'body',
    errorMessage: 'hours must be number',
  },
  price: {
    isNumeric: true,
    in: 'body',
    errorMessage: 'price must be number',
  },
  subjectId: {
    isUUID: true,
    in: 'body',
    errorMessage: 'subjectId must be UUID',
  },
}

const RemoveActivityRequest: Schema = {
  activityId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'activityId must be UUID',
  },
}

export {
  GetActivityByIdRequest,
  AddActivityRequest,
  UpdateActivityRequest,
  RemoveActivityRequest,
}
