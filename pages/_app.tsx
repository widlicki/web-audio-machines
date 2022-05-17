import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import DefaultTemplate from '../components/site/Templates/Default/DefaultTemplate'
import theme from '../styles/Theme'
import '../styles/globals.css'

function WebAudioMachines({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    </ThemeProvider>
  )
}

export default WebAudioMachines
