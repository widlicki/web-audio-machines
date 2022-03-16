import { Button, styled } from '@mui/material'
import theme from '../../../styles/theme'

const StyledButton = styled(Button)(() => ({
  borderRadius: '6px',
  padding: '9px 18px 9px',
  border: '1px solid #26607d',
  backgroundColor: '#5c6483',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#4c4b79',
    cursor: 'pointer',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: theme.disabled.bgColor,
    border: `1px solid ${theme.disabled.color}`,
    color: theme.disabled.color,
  },
}))

export interface ButtonProps {}

const AppButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default AppButton
