import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import MachineCard from '../components/machines/MachineCard/MachineCard'
import DefaultTemplate from '../components/site/Templates/Default/DefaultTemplate'
import SamplerImg from '../resources/images/sampler.png'

const HomePage: NextPage = () => (
  <DefaultTemplate>
    <Grid container spacing={3} sx={{ marginTop: '80px' }}>
      <Grid item xs={12} sm={6} md={6}>
        <MachineCard
          description="4 track sample-based sequencer with step and probability randomization, preset save and callback."
          image={SamplerImg}
          name="Sampler"
          to="/machines/sampler"
        />
      </Grid>
    </Grid>
  </DefaultTemplate>
)

export default HomePage
