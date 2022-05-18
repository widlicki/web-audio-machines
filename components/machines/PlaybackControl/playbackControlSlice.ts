import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../../store/index'

export interface PlaybackState {
  status: 'playing' | 'stopped' | 'paused'
}

const initialState: PlaybackState = {
  status: 'playing',
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlaybackStatus = (state: AppState) =>
  state.playbackControl.status

export default playbackControlSlice.reducer
