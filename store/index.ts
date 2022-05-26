import { configureStore } from '@reduxjs/toolkit'
import playbackControlReducer from '../components/machines/PlaybackControl/playbackControlSlice'
import stepControlReducer from '../components/machines/StepControl/stepControlSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      playbackControl: playbackControlReducer,
      stepControl: stepControlReducer,
    },
  })
}

const store = makeStore()

export default store

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
