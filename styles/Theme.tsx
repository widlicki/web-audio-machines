import {
  CircularProgress,
  Link,
  Typography,
  createTheme,
  styled,
} from '@mui/material'
import { common, grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      color: {
        dark: string
        light: string
      }
    }
    border: {
      size: {
        sm: string
        md: string
      }
      color: {
        dark: string
        light: string
      }
    }
    disabled: {
      color: string
      bgColor: string
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
      size?: {
        sm?: string
        md?: string
      }
      color?: {
        dark?: string
        light?: string
      }
    }
    disabled?: {
      color?: string
      bgColor?: string
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
    size: {
      sm: '1px',
      md: '4px',
    },
    color: {
      dark: grey[800],
      light: grey[200],
    },
  },
  disabled: {
    color: grey[400],
    bgColor: grey[200],
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
