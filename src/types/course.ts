import { Schema } from 'express-validator'

const AddCourseRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
  },
}

const GetCourseRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'query',
    optional: true,
  },
}

const GetCourseByIdRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
  },
}

const UpdateCourseRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
  },
  name: {
    isString: true,
    in: 'body',
    optional: true,
  },
}

const RemoveCourseRequest: Schema = {
  courseId: {
    isUUID: true,
    in: 'params',
  },
}

export {
  GetCourseRequest,
  GetCourseByIdRequest,
  AddCourseRequest,
  UpdateCourseRequest,
  RemoveCourseRequest,
}
