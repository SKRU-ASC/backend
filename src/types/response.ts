export interface Response {
  status: 'success' | 'error'
  data?: any[] | object
}

export interface SuccessResponse extends Response {
  status: 'success'
}

export interface ErrorResponse extends Response {
  status: 'error'
  message: string[] | string
}
