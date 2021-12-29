import type { AppProps } from 'next/app'
import StyleProvider from '../styles/style-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  )
}

export default MyApp
