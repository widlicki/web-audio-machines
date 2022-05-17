import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import withRequest from '../../components/hoc/withRequest'
import AudioCategoryList from '../../components/machines/AudioCategoryList/AudioCategoryList'
import { useGetData } from '../../hooks/useGetData/useGetData'
import { AudioCategory } from '../../interfaces/library'
import { API_URL, AUDIO_CATEGORIES } from '../../networkRequests/constants'
import theme from '../../styles/Theme'

const AudioCategoriesWithRequest = withRequest(AudioCategoryList)

const LibraryPage: NextPage = () => {
  const {
    data: audioCategories,
    isLoading: isAudioCategoriesLoading,
    isError: isAudioCategoriesError,
  } = useGetData<AudioCategory[]>({
    requestUrl: `${API_URL}${AUDIO_CATEGORIES}`,
  })

  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid
        item
        xs={4}
        sx={{
          border: 1,
          borderRadius: 4,
          borderColor: theme.border.color.light,
        }}
      >
        <AudioCategoriesWithRequest
          categories={audioCategories}
          isLoading={isAudioCategoriesLoading}
          isError={isAudioCategoriesError}
        />
      </Grid>
      <Grid item xs={4}>
        test
      </Grid>
    </Grid>
  )
}

export default LibraryPage
