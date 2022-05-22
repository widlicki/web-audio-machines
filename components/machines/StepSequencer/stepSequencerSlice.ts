/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../../store/index'

export interface StepSequencerState {
  maxNumSteps: 16 | 32 | 64
  minNumSteps: number
  numSteps: number
}

const initialState: StepSequencerState = {
  maxNumSteps: 32,
  minNumSteps: 8,
  numSteps: 16,
}

export const stepSequencerSlice = createSlice({
  name: 'stepSequencer',
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

export const { incNumSteps, decNumSteps } = stepSequencerSlice.actions

export const selectNumSteps = (state: AppState) => state.stepSequencer.numSteps
export const selectMaxNumSteps = (state: AppState) =>
  state.stepSequencer.maxNumSteps
export const selectMinNumSteps = (state: AppState) =>
  state.stepSequencer.minNumSteps

export default stepSequencerSlice.reducer
