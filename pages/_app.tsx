import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import DefaultTemplate from '../components/site/Templates/Default/DefaultTemplate'
import store from '../store'
import theme from '../styles/Theme'
import '../styles/globals.css'

function WebAudioMachines({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultTemplate>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </DefaultTemplate>
    </ThemeProvider>
  )
}

export default WebAudioMachines
