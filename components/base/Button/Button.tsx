import { Button } from '@mui/material'
import { useState } from 'react'
import theme from '../../../styles/Theme'

export interface ButtonProps {
  onClick: () => void
  text: string
  toggleText?: string
  variant: undefined | 'button' | 'toggle'
}

const AppButton = ({
  onClick,
  variant = 'button',
  text,
  toggleText,
  ...props
}: ButtonProps) => {
  const [selected, setSelected] = useState(false)

  const handleClick = (e) => {
    if (variant === 'toggle') {
      setSelected(!selected)
    }
    onClick(e)
  }

  return (
    <Button
      sx={{
        borderRadius: theme.border.radius.sm,
        padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(2)}`,
        border: `${theme.border.size.sm} solid ${theme.border.color.light}`,
        backgroundColor:
          variant === 'toggle' && selected
            ? theme.palette.secondary.main
            : theme.palette.primary.dark,
        color: 'common.white',
        '&:hover': {
          backgroundColor:
            variant === 'toggle' && selected
              ? theme.palette.secondary.main
              : theme.palette.primary.light,
          cursor: 'pointer',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: theme.disabled.bgColor,
          border: `${theme.border.size.sm} solid ${theme.disabled.color}`,
          color: theme.disabled.color,
        },
      }}
      {...props}
      onClick={handleClick}
    >
      {selected ? toggleText : text}
    </Button>
  )
}

export default AppButton
