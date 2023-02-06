import { Schema } from 'express-validator'

const AddCourseRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
}

const GetCourseByIdRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'courseId must be UUID',
  },
}

const UpdateCourseRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'courseId must be UUID',
  },
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
}

const RemoveCourseRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'courseId must be UUID',
  },
}

export {
  GetCourseByIdRequest,
  AddCourseRequest,
  UpdateCourseRequest,
  RemoveCourseRequest,
}
