import { AxiosResponse } from 'axios'
import { AudioCategory } from '../interfaces/library'
import { API_URL, AUDIO_CATEGORIES } from './constants'
import { get } from './http'

export const getAudioCategories = async (): Promise<
  AxiosResponse<AudioCategory[]>
> => {
  const options = {
    requestUrl: `${API_URL}${AUDIO_CATEGORIES}`,
    requestHeaders: {},
  }

  return await get(options)
}
