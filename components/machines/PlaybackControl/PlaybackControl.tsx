import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import {
  PauseButtonIcon,
  PlayButtonIcon,
  StopButtonIcon,
} from '../../base/Icons/Icons'
import Module from '../../base/Module/Module'
import { pause, play, selectPlaybackStatus, stop } from './playbackControlSlice'

const PlaybackControl = () => {
  const dispatch = useAppDispatch()
  const playbackStatus = useAppSelector(selectPlaybackStatus)

  const handleChange = (e, status) => {
    switch (status) {
      case 'playing':
        dispatch(play())
        break
      case 'paused':
        dispatch(pause())
        break
      case 'stopped':
        dispatch(stop())
        break
      default:
        break
    }
  }

  return (
    <Module title="Playback">
      <ToggleButtonGroup
        value={playbackStatus}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="playing" aria-label="Play button">
          <PlayButtonIcon />
        </ToggleButton>
        <ToggleButton value="paused" aria-label="Pause button">
          <PauseButtonIcon />
        </ToggleButton>
        <ToggleButton value="stopped" aria-label="Stop button">
          <StopButtonIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Module>
  )
}

export default PlaybackControl
