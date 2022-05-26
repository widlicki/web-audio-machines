import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import theme from '../../../styles/Theme'
import Module from '../../base/Module/Module'
import {
  selectMaxNumSteps,
  selectMinNumSteps,
  selectNumSteps,
} from '../StepControl/stepControlSlice'
import StepPad from '../StepPad/StepPad'

const StepSequencer = () => {
  const numSteps = useAppSelector(selectNumSteps)
  const maxNumSteps = useAppSelector(selectMaxNumSteps)
  const minNumSteps = useAppSelector(selectMinNumSteps)

  const createSequencerSteps = () => {
    const sequencerSteps: ReactJSXElement[] = []
    let steps: ReactJSXElement[] = []
    for (let i = 1; i <= maxNumSteps; i += 1) {
      steps.push(
        <Grid
          key={`pad-${i}`}
          item
          xs={3}
          direction="column"
          sx={{ padding: theme.spacing(1) }}
        >
          <StepPad isDisabled={false} isSet={false} isTriggered={false} />
        </Grid>
      )
      if (i % 4 === 0) {
        // Every 4 steps, push row of 6 cols to create 8 cols total on 12 grid system
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
    <Module title="Step Sequencer">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {createSequencerSteps()}
      </Grid>
    </Module>
  )
}

export default StepSequencer
