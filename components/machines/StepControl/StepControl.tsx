import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import FieldWrapper from '../../base/FieldWrapper/FieldWrapper'
import Module from '../../base/Module/Module'
import NumberValue from '../../base/NumberValue/NumberValue'
import {
  decNumSteps,
  incNumSteps,
  selectMaxNumSteps,
  selectMinNumSteps,
  selectNumSteps,
} from './stepControlSlice'

const StepControl = () => {
  const dispatch = useAppDispatch()
  const numSteps = useAppSelector(selectNumSteps)
  const maxNumSteps = useAppSelector(selectMaxNumSteps)
  const minNumSteps = useAppSelector(selectMinNumSteps)

  return (
    <Module title="Step Controls">
      <FieldWrapper title="Num Steps">
        <NumberValue
          handleDecrement={() => dispatch(decNumSteps())}
          handleIncrement={() => dispatch(incNumSteps())}
          maximum={maxNumSteps}
          minimum={minNumSteps}
          value={numSteps}
        />
      </FieldWrapper>
    </Module>
  )
}

export default StepControl
