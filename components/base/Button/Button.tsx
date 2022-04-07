import { Button } from '@mui/material'
import theme from '../../../styles/theme'

const AppButton = ({ children, ...props }) => (
  <Button
    sx={{
      borderRadius: theme.border.radius.sm,
      padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(2)}`,
      border: `${theme.border.size.sm} solid ${theme.border.color.light}`,
      backgroundColor: theme.palette.primary.light,
      color: 'common.white',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
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
  >
    {children}
  </Button>
)

export default AppButton
