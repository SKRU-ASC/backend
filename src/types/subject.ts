import { Schema } from 'express-validator'

const AddSubjectRequest: Schema = {
  name: {
    isString: true,
    in: 'body',
    errorMessage: 'name must be string',
  },
  courseId: {
    isUUID: true,
    in: 'body',
    errorMessage: 'courseId must be UUID',
  },
}

const GetSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'query',
    optional: true,
    errorMessage: 'subjectId must be UUID',
  },
}

const UpdateSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'subjectId must be UUID',
  },
  name: {
    isString: true,
    in: 'body',
    optional: true,
    errorMessage: 'name must be string',
  },
  courseId: {
    isUUID: true,
    in: 'body',
    optional: true,
    errorMessage: 'courseId must be UUID',
  },
}

const RemoveSubjectRequest: Schema = {
  subjectId: {
    isUUID: true,
    in: 'params',
    errorMessage: 'subjectId must be UUID',
  },
}

export {
  GetSubjectRequest,
  AddSubjectRequest,
  UpdateSubjectRequest,
  RemoveSubjectRequest,
}
