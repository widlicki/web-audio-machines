import { Box, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Module from '../../components/base/Module/Module'
import theme from '../../styles/Theme'

const SamplerPage: NextPage = () => (
  <Box
    sx={{
      background: theme.background.color.lightest,
      borderRadius: theme.border.radius.sm,
      margin: '80px auto 0 auto',
      padding: theme.spacing(1),
      maxWidth: '1200px',
    }}
  >
    <Grid container>
      <Grid item xs={12} sm={6} md={3}>
        <Module title="Audio Slots" />
      </Grid>
    </Grid>
  </Box>
)

export default SamplerPage
