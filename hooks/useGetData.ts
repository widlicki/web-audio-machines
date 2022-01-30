import { useEffect, useState } from 'react'
import { GetRequest } from '../interfaces/http'
import { get } from '../networkRequests/http'

export const useGetData = <T>(request: GetRequest) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      setData(null)
      setIsLoading(true)
      try {
        const response = await get(request)
        setData(response.data)

        setIsLoading(false)
      } catch (ex) {
        setIsError(true)
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  return {
    data,
    isLoading,
    isError,
  }
}
