import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SamplerImg from '../../../resources/images/sampler.png'
import { MachineCard } from '../../../styles/theme'

const AvailableMachines = () => (
  <Grid container spacing={3} sx={{ marginTop: '80px' }}>
    <Grid item xs={12} sm={6} md={6}>
      <MachineCard>
        <Image src={SamplerImg} alt="Sampler" />
        <CardContent>
          <Typography gutterBottom variant="h4">
            Sampler
          </Typography>
          <Typography variant="body2" color="text.secondary">
            4 track sample-based sequencer with step and probability
            randomization, preset save and callback.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Launch</Button>
        </CardActions>
      </MachineCard>
    </Grid>
    <Grid item xs={12} sm={6} md={6}>
      <MachineCard>
        <CardContent>
          <Typography gutterBottom variant="h4">
            Sampler
          </Typography>
          <Typography variant="body2" color="text.secondary">
            4 track sample-based sequencer with step and probability
            randomization, preset save and callback.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Launch</Button>
        </CardActions>
      </MachineCard>
    </Grid>
  </Grid>
)

export default AvailableMachines
