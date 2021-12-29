import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
  components: {
    Button: {
      baseStyle: {
        padding: '2.8rem',
        color: 'gray.800',
        bg: 'gray.100',
        border: '1px',
        borderColor: 'gray.800',
      },
    },
    Spinner: {
      baseStyle: {
        color: 'orange.400',
      },
    },
  },
})

export default theme
