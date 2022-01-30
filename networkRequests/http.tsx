import axios, { AxiosResponse, Method } from 'axios'
import { GetRequest } from '../interfaces/http'

async function get<T, R = AxiosResponse<T>>({
  requestUrl,
  requestHeaders,
}: GetRequest): Promise<R> {
  const requestOptions = {
    method: 'GET' as Method,
    headers: {
      ...requestHeaders,
      // Authorization: `Bearer ${await getAccessToken()}`,
    },
  }

  return await axios
    .get(requestUrl, requestOptions)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response ? error.response : error
    })
}

export { get }
