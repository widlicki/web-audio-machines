import {
  AppBar,
  Card,
  CircularProgress,
  Link,
  Typography,
  createTheme,
  styled,
} from '@mui/material'
import { blue, common, grey, orange } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      color: {
        dark: string
        light: string
      }
    }
    border: {
      color: {
        dark: string
        light: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background?: {
      color?: {
        dark?: string
        light?: string
      }
    }
    border?: {
      color?: {
        dark?: string
        light?: string
      }
    }
  }
}

const theme = createTheme({
  background: {
    color: {
      dark: '#444753',
      light: '#5d6990',
    },
  },
  border: {
    color: {
      dark: grey[800],
      light: grey[200],
    },
  },
  palette: {
    primary: {
      main: '#303C61',
    },
    secondary: {
      main: '#DB9D0D',
    },
  },
})

export const AppHeader = styled(AppBar)(() => ({
  background: theme.background.color.dark,
  borderBottom: `4px solid ${theme.palette.secondary.main}`,
}))

export const Loader = styled(CircularProgress)(() => ({
  color: theme.palette.primary.main,
}))

export const MachineCard = styled(Card)(() => ({
  background: theme.background.color.light,
  padding: '20px',
  color: common.white,
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
