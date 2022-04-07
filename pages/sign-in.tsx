import { Box } from '@mui/material'
import type { NextPage } from 'next'
import DefaultTemplate from '../components/site/Templates/Default/DefaultTemplate'
import theme from '../styles/theme'

const SignInPage: NextPage = () => (
  <DefaultTemplate>
    <Box
      sx={{
        background: theme.background.color.light,
        borderRadius: '14px',
        color: 'common.white',
        margin: '100px auto auto auto',
        padding: theme.spacing(4),
        width: '600px',
        height: '550px',
      }}
    >
      Sign In
    </Box>
  </DefaultTemplate>
)

export default SignInPage
