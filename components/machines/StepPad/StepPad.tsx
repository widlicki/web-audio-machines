import { Box } from '@mui/material'
import theme from '../../../styles/Theme'

export interface StepPadProps {
  isDisabled?: boolean
  isSet?: boolean
  isTriggered?: boolean
}

const StepPad = ({
  isDisabled = false,
  isSet = false,
  isTriggered = false,
}: StepPadProps) => {
  const borderColor = theme.border.color.dark
  const borderSize = theme.border.size.sm
  return (
    <Box
      sx={{
        border: !isDisabled
          ? `${borderSize} solid ${borderColor}`
          : `${borderSize} dashed ${borderColor}`,
        borderRadius: theme.border.radius.sm,
        minWidth: '60px',
        minHeight: '55px',
      }}
    />
  )
}

export default StepPad
