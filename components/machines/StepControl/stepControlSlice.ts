/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../../store/index'

export interface StepControlState {
  maxNumSteps: 16 | 32 | 64
  minNumSteps: number
  numSteps: number
}

const initialState: StepControlState = {
  maxNumSteps: 32,
  minNumSteps: 8,
  numSteps: 16,
}

export const stepControlSlice = createSlice({
  name: 'stepControl',
  initialState,
  reducers: {
    decNumSteps: (state) => {
      state.numSteps =
        state.numSteps >= state.minNumSteps
          ? state.numSteps - 1
          : state.numSteps
    },
    incNumSteps: (state) => {
      state.numSteps =
        state.numSteps <= state.maxNumSteps
          ? state.numSteps + 1
          : state.numSteps
    },
  },
})

export const { incNumSteps, decNumSteps } = stepControlSlice.actions

export const selectNumSteps = (state: AppState) => state.stepControl.numSteps
export const selectMaxNumSteps = (state: AppState) =>
  state.stepControl.maxNumSteps
export const selectMinNumSteps = (state: AppState) =>
  state.stepControl.minNumSteps

export default stepControlSlice.reducer
