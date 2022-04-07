import { Box } from '@mui/material'
import type { NextPage } from 'next'
import DefaultTemplate from '../../components/site/Templates/Default/DefaultTemplate'
import theme from '../../styles/theme'

const SamplerPage: NextPage = () => (
  <DefaultTemplate>
    <Box
      sx={{
        background: theme.background.color.light,
        borderRadius: '14px',
        color: 'common.white',
        margin: '80px auto 0 auto',
        padding: theme.spacing(4),
        width: '1200px',
      }}
    >
      Sampler
    </Box>
  </DefaultTemplate>
)

export default SamplerPage
