import { useEffect, useState } from 'react'
import { AudioCategory } from '../interfaces/library'
import { mockAudioCategories } from '../mocks/library'

export const useGetData = () => {
  const [data, setData] = useState<AudioCategory[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      setData([])
      setIsLoading(true)
      try {
        const audioCategories = mockAudioCategories

        if (audioCategories.length > 0) {
          setData(audioCategories)
        }

        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000))

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
