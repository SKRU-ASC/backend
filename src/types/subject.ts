import { Schema } from 'express-validator'

const AddSubjectRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
  },
  courseId: {
    isUUID: true,
    in: 'body',
  },
}

const GetSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'query',
    optional: true,
  },
}

const UpdateSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'params',
  },
  name: {
    isString: true,
    in: 'body',
    optional: true,
  },
  courseId: {
    isUUID: true,
    in: 'body',
    optional: true,
  },
}

const RemoveSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'params',
  },
}

export {
  GetSubjectRequest,
  AddSubjectRequest,
  UpdateSubjectRequest,
  RemoveSubjectRequest,
}
