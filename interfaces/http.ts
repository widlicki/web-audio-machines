export interface GetRequest {
  requestUrl: string
  requestHeaders?: object
}

export interface ErrorResponse extends Error {
  info?: string
  status?: number
}
