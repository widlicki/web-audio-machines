import { Grid } from '@mui/material'
import StepPad from '../StepPad/StepPad'

const StepSequencer = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid container direction="row" xs={6}>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
      </Grid>
      <Grid container direction="row" xs={6}>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
        <Grid item xs={3}>
          <StepPad active={false} enabled={false} on={false} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StepSequencer
