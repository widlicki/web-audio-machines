import { Container } from '@mui/material'
import theme from '../../../../styles/theme'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'

const DefaultTemplate = ({ children }) => (
  <>
    <Header isAuthenticated={false} />
    <Container
      maxWidth={false}
      sx={{ background: theme.background.color.dark }}
    >
      <Container
        maxWidth="lg"
        sx={{
          background: theme.background.color.dark,
          padding: theme.spacing(4),
          color: 'common.white',
          minHeight: '90vh',
        }}
      >
        {children}
      </Container>
    </Container>
    <Footer />
  </>
)

export default DefaultTemplate
