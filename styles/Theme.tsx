import { CircularProgress, createTheme, styled } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'

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

export default theme
