import { extendTheme } from '@chakra-ui/react';

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
        padding: '0.8rem',
        color: 'gray.800',
        bg: 'gray.100',
        border: '1px',
        borderColor: 'gray.800',
      },
    },
  },
});

export default theme;
