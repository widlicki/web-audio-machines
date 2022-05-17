import { Card, CardContent, CardHeader } from '@mui/material'
import theme from '../../../styles/Theme'

export interface ModuleProps {
  title: string
  children?: JSX.Element
}

const Module = ({ title, children }: ModuleProps) => (
  <Card
    sx={{
      borderRadius: theme.border.radius.sm,
      margin: theme.spacing(1),
    }}
  >
    <CardHeader
      title={title}
      titleTypographyProps={{ variant: 'subtitle2' }}
      sx={{
        color: 'common.white',
        backgroundColor: theme.background.color.light,
        height: '16px',
        padding: theme.spacing(2),
      }}
    />
    <CardContent
      sx={{
        backgroundColor: theme.background.color.lightest,
        padding: theme.spacing(2),
        height: '16px',
      }}
    >
      {children}
    </CardContent>
  </Card>
)

export default Module
