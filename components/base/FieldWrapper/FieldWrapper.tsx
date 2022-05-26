import { FormControl, FormGroup, FormLabel } from '@mui/material'
import theme from '../../../styles/Theme'

export interface FieldWrapperProps {
  title: string
  children?: JSX.Element
}

const FieldWrapper = ({ title, children }: FieldWrapperProps) => {
  return (
    <FormControl
      component="fieldset"
      sx={{
        width: '100%',
        border: `${theme.border.size.sm} solid ${theme.border.color.normal}`,
        borderRadius: 1,
        marginTop: theme.spacing(-1),
      }}
    >
      <FormLabel
        component="legend"
        sx={{
          fontSize: '12px',
          marginLeft: theme.spacing(1),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
        }}
      >
        {title}
      </FormLabel>
      <FormGroup>{children}</FormGroup>
    </FormControl>
  )
}

export default FieldWrapper
