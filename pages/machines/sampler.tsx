import { Box, Grid } from '@mui/material'
import type { NextPage } from 'next'
import PlaybackControl from '../../components/machines/PlaybackControl/PlaybackControl'
import StepSequencer from '../../components/machines/StepSequencer/StepSequencer'
import MachineTemplate from '../../components/site/Templates/MachineTemplate/MachineTemplate'
import theme from '../../styles/Theme'

const SamplerPage: NextPage = () => (
  <MachineTemplate>
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
        <Grid item xs={12}>
          <PlaybackControl />
        </Grid>
        <Grid item xs={12}>
          <StepSequencer />
        </Grid>
      </Grid>
    </Box>
  </MachineTemplate>
)

export default SamplerPage
