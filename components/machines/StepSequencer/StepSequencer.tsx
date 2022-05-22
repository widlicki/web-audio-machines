import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import theme from '../../../styles/Theme'
import StepPad from '../StepPad/StepPad'
import {
  decNumSteps,
  incNumSteps,
  selectMaxNumSteps,
  selectMinNumSteps,
  selectNumSteps,
} from './stepSequencerSlice'

const StepSequencer = () => {
  const dispatch = useAppDispatch()
  const numSteps = useAppSelector(selectNumSteps)
  const maxNumSteps = useAppSelector(selectMaxNumSteps)
  const minNumSteps = useAppSelector(selectMinNumSteps)

  const createSequencerSteps = () => {
    const sequencerSteps: ReactJSXElement[] = []
    let steps: ReactJSXElement[] = []
    for (let i = 1; i <= maxNumSteps; i += 1) {
      steps.push(
        <Grid item xs={3} direction="column" sx={{ padding: theme.spacing(1) }}>
          <StepPad isDisabled={false} isSet={false} isTriggered={false} />
        </Grid>
      )
      if (i % 4 === 0) {
        sequencerSteps.push(
          <Grid container direction="row" xs={6}>
            {steps}
          </Grid>
        )
        steps = []
      }
    }
    return sequencerSteps
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {createSequencerSteps()}
    </Grid>
  )
}

export default StepSequencer
