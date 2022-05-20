import { Box } from '@mui/material'

export interface StepPadProps {
  active?: boolean
  enabled?: boolean
  on?: boolean
}

const StepPad = ({
  active = true,
  enabled = false,
  on = false,
}: StepPadProps) => {
  return (
    <Box
      sx={{
        border: enabled ? '1px solid black' : '1px dashed black',
        borderRadius: '5px',
        minWidth: '60px',
        minHeight: '40px',
      }}
    />
  )
}

export default StepPad
