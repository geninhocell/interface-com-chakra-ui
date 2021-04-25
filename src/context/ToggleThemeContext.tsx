import { createContext, ReactNode, useContext } from 'react';
import { useColorMode, useColorModeValue, ColorMode } from '@chakra-ui/react';

interface ToggleThemeProviderProps {
  children: ReactNode;
}

interface ToggleThemeContextData {
  toggleColorMode: () => void;
  colorMode: ColorMode;
  bg: 'white.900' | 'black.900';
  color: 'black.800' | 'white.800';
  info: 'black.700' | 'white.700';
}

const ToggleThemeContext = createContext({} as ToggleThemeContextData);

export function ToggleThemeProvider({ children }: ToggleThemeProviderProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  const bg = useColorModeValue('white.900', 'black.900');
  const color = useColorModeValue('black.800', 'white.800');
  const info = useColorModeValue('black.700', 'white.700');

  return (
    <ToggleThemeContext.Provider
      value={{ toggleColorMode, colorMode, bg, color, info }}
    >
      {children}
    </ToggleThemeContext.Provider>
  );
}

export const useToggleTheme = () => useContext(ToggleThemeContext);
