import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import theme from '../../../styles/theme'

const Footer = () => (
  <Container
    maxWidth={false}
    sx={{
      background: theme.background.color.light,
      borderTop: `${theme.border.size.md} solid ${theme.palette.secondary.main}`,
      color: 'common.white',
      height: theme.spacing(12),
    }}
  >
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          color: 'common.white',
          position: 'relative',
          marginTop: theme.spacing(4),
        }}
      >
        <Typography variant="body1">
          © web audio machines {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  </Container>
)

export default Footer
