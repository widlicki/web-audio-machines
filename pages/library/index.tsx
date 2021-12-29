import type { NextPage } from 'next'
import AudioCategoryList from '../../components/audio-category-list/audio-category-list'
import WithRequest from '../../hoc/with-request'
import { useGetData } from '../../hooks/use-get-data'

const AudioCategoriesWithRequest = WithRequest(AudioCategoryList)

const LibraryPage: NextPage = () => {
  const {
    data: audioCategories,
    isLoading: isAudioCategoriesLoading,
    isError: isAudioCategoriesError,
  } = useGetData()

  return (
    <div>
      <h1>Library</h1>
      <AudioCategoriesWithRequest
        categories={audioCategories}
        isLoading={isAudioCategoriesLoading}
        isError={isAudioCategoriesError}
      />
    </div>
  )
}

export default LibraryPage
