import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { theme } from '../styles/theme';
import { ToggleThemeProvider } from '../context/ToggleThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToggleThemeProvider>
        <Component {...pageProps} />
      </ToggleThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
