import { configureStore } from '@reduxjs/toolkit'
import playbackControlReducer from '../components/machines/PlaybackControl/playbackControlSlice'
import stepSequencerReducer from '../components/machines/StepSequencer/stepSequencerSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      playbackControl: playbackControlReducer,
      stepSequencer: stepSequencerReducer,
    },
  })
}

const store = makeStore()

export default store

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
