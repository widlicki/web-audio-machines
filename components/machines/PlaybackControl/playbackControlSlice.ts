/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../../store/index'

export interface PlaybackState {
  status: 'playing' | 'stopped' | 'paused'
  bpm: number
  minBpm: number
  maxBpm: number
}

const initialState: PlaybackState = {
  status: 'stopped',
  bpm: 90,
  minBpm: 20,
  maxBpm: 180,
}

export const playbackControlSlice = createSlice({
  name: 'playbackControl',
  initialState,
  reducers: {
    decBpm: (state) => {
      state.bpm = state.bpm >= state.minBpm ? state.bpm - 1 : state.bpm
    },
    incBpm: (state) => {
      state.bpm = state.bpm <= state.maxBpm ? state.bpm + 1 : state.bpm
    },
    pause: (state) => {
      state.status = 'paused'
    },
    play: (state) => {
      state.status = 'playing'
    },
    stop: (state) => {
      state.status = 'stopped'
    },
  },
})

export const { decBpm, incBpm, pause, play, stop } =
  playbackControlSlice.actions

export const selectPlaybackStatus = (state: AppState) =>
  state.playbackControl.status

export const selectBpm = (state: AppState) => state.playbackControl.bpm
export const selectMaxBpm = (state: AppState) => state.playbackControl.maxBpm
export const selectMinBpm = (state: AppState) => state.playbackControl.minBpm

export default playbackControlSlice.reducer
