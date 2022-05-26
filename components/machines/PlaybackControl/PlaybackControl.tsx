import {
  Box,
  FormControl,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import theme from '../../../styles/Theme'
import FieldWrapper from '../../base/FieldWrapper/FieldWrapper'
import {
  PauseButtonIcon,
  PlayButtonIcon,
  StopButtonIcon,
} from '../../base/Icons/Icons'
import Module from '../../base/Module/Module'
import NumberValue from '../../base/NumberValue/NumberValue'
import {
  decBpm,
  incBpm,
  pause,
  play,
  selectBpm,
  selectMaxBpm,
  selectMinBpm,
  selectPlaybackStatus,
  stop,
} from './playbackControlSlice'

const PlaybackControl = () => {
  const dispatch = useAppDispatch()
  const playbackStatus = useAppSelector(selectPlaybackStatus)
  const bpm = useAppSelector(selectBpm)
  const maxBpm = useAppSelector(selectMaxBpm)
  const minBpm = useAppSelector(selectMinBpm)

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

  const [direction, setDirection] = useState<'forward' | 'reverse' | 'random'>(
    'forward'
  )

  const handleDirectionChange = (e) => {
    setDirection(e.target.value)
  }

  return (
    <Module title="Playback">
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ marginRight: theme.spacing(3) }}>
          <FieldWrapper title="BPM">
            <NumberValue
              handleDecrement={() => dispatch(decBpm())}
              handleIncrement={() => dispatch(incBpm())}
              maximum={maxBpm}
              minimum={minBpm}
              value={bpm}
            />
          </FieldWrapper>
        </Box>
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
        <Box sx={{ marginLeft: theme.spacing(3) }}>
          <FormControl>
            <TextField
              value={direction}
              onChange={handleDirectionChange}
              select
              label="Direction"
            >
              <MenuItem value="forward">Forward</MenuItem>
              <MenuItem value="random">Random</MenuItem>
              <MenuItem value="reverse">Reverse</MenuItem>
            </TextField>
          </FormControl>
        </Box>
      </Box>
    </Module>
  )
}

export default PlaybackControl
