import { Container } from '@mui/material'
import theme from '../../../../styles/Theme'

const MachineTemplate = ({ children }) => (
  <Container maxWidth={false} sx={{ background: theme.background.color.dark }}>
    <Container
      maxWidth="lg"
      sx={{
        background: theme.background.color.dark,
        padding: theme.spacing(4),
        color: 'common.white',
        minHeight: '100vh',
      }}
    >
      {children}
    </Container>
  </Container>
)

export default MachineTemplate
