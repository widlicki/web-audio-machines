import { act, renderHook } from '@testing-library/react-hooks'
import { AxiosResponse } from 'axios'
import { mocked } from 'ts-jest/utils'
import { AudioCategory } from '../../interfaces/library'
import { mockAudioCategories } from '../../mocks/library'
import { get } from '../../networkRequests/http'
import { useGetData } from './useGetData'

jest.mock('../../networkRequests/http')
const mockedGet = mocked(get, true)

describe('useGetData', () => {
  it('Should get data on API success', async () => {
    mockedGet.mockReturnValue(
      Promise.resolve({
        status: 200,
        data: mockAudioCategories,
      } as AxiosResponse<AudioCategory[]>)
    )

    const { result, waitFor } = renderHook(() =>
      useGetData({
        requestUrl: 'localhost:3000',
      })
    )

    expect(result.current.data).toBe(null)
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(false)

    await act(async () => {
      await waitFor(() => result.current.isLoading)
      expect(result.current.data).toBe(mockAudioCategories)
    })
  })

  it.skip('Should return error on API error', async () => {
    mockedGet.mockReturnValue(
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject({
        status: 500,
      } as AxiosResponse<AudioCategory[]>)
    )

    const { result, waitFor } = renderHook(() =>
      useGetData({
        requestUrl: 'localhost:3000',
      })
    )

    await act(async () => {
      await waitFor(() => result.current.isLoading)
      expect(result.current.isError).toBe(true)
    })
  })
})
