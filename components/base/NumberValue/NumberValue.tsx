import { Box, IconButton } from '@mui/material'
import theme from '../../../styles/Theme'
import { DecrementButton, IncrementButton } from '../../base/Icons/Icons'

export interface NumberValueProps {
  handleDecrement: () => void
  handleIncrement: () => void
  maximum: number
  minimum: number
  value: number
}

const NumberValue = ({
  handleDecrement,
  handleIncrement,
  maximum,
  minimum,
  value,
}: NumberValueProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(0.5),
      }}
    >
      <IconButton
        color="primary"
        aria-label="decrement count"
        onClick={() => handleDecrement()}
        disabled={value === minimum}
      >
        {DecrementButton}
      </IconButton>
      <Box aria-label="number value">{value}</Box>
      <IconButton
        color="primary"
        aria-label="increment count"
        onClick={() => handleIncrement()}
        disabled={value === maximum}
      >
        {IncrementButton}
      </IconButton>
    </Box>
  )
}

export default NumberValue
