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
        lightest: string
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
      radius: {
        sm: string
        md: string
        lg: string
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
        lightest?: string
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
      radius: {
        sm?: string
        md?: string
        lg?: string
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
      lightest: grey[200],
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
    radius: {
      sm: '2px',
      md: '20px',
      lg: '50px',
    },
  },
  disabled: {
    color: grey[400],
    bgColor: grey[200],
  },
  palette: {
    primary: {
      light: '#5c6483',
      main: '#303C61',
      dark: '#4c4b79',
    },
    secondary: {
      main: '#DB9D0D',
    },
  },
})

export const Loader = styled(CircularProgress)(() => ({
  color: theme.palette.primary.main,
}))

export const NotFoundMessage = styled(Typography)(() => ({
  color: grey[400],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '1.4em',
}))

export default theme
