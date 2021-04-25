import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    yellow: {
      '900': '#FFBA08',
    },
    black: {
      '900': '#000000',
      '800': '#47585B',
      '700': '#999999',
    },
    white: {
      '900': '#FFFFFF',
      '800': '#F5F8FA',
      '700': '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
