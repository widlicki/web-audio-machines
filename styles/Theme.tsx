import {
  CircularProgress,
  Link,
  Typography,
  createTheme,
  styled,
} from '@mui/material'
import { blue, common, grey, orange } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    border: {
      color: {
        dark: string
        light: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    border?: {
      color?: {
        dark?: string
        light?: string
      }
    }
  }
}

const theme = createTheme({
  border: {
    color: {
      dark: grey[800],
      light: grey[200],
    },
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500],
    },
  },
})

export const Loader = styled(CircularProgress)(() => ({
  color: theme.palette.primary.main,
}))

export const NavLink = styled(Link)(() => ({
  fontSize: 16,
  color: common.white,
  marginLeft: '12px',
  textDecoration: 'none',
}))

export const NotFoundMessage = styled(Typography)(() => ({
  color: grey[400],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '1.4em',
}))

export default theme
