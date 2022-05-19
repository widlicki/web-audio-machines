/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../../store/index'

export interface PlaybackState {
  status: 'playing' | 'stopped' | 'paused'
}

const initialState: PlaybackState = {
  status: 'stopped',
}

export const playbackControlSlice = createSlice({
  name: 'playbackControl',
  initialState,
  reducers: {
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

export const { pause, play, stop } = playbackControlSlice.actions

export const selectPlaybackStatus = (state: AppState) =>
  state.playbackControl.status

export default playbackControlSlice.reducer
