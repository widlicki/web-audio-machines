import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import theme from './theme'

const StyleProvider: FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default StyleProvider
