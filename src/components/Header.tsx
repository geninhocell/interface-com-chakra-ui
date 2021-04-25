import { Flex, Image, Icon, IconButton, Link } from '@chakra-ui/react';
import { RiArrowLeftSLine, RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

import { useToggleTheme } from '../context/ToggleThemeContext';

interface HeaderProps {
  linkUrl?: string;
}

export const Header = ({ linkUrl = null }: HeaderProps) => {
  const { toggleColorMode, colorMode, color } = useToggleTheme();
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h={100}
      mx="auto"
      justify={asPath === '/' ? 'center' : 'space-between'}
      align="center"
    >
      {linkUrl && (
        <Link href={linkUrl} ml="152px">
          <Icon w="32px" h="32px" color={color} as={RiArrowLeftSLine} />
        </Link>
      )}
      <Image src="/images/logo.svg" alt="logo" w="100%" maxWidth={184} p="4" />

      <IconButton
        aria-label="Toggle theme"
        icon={<Icon as={colorMode === 'light' ? RiMoonFill : RiSunLine} />}
        size="lg"
        align="center"
        justify="center"
        onClick={toggleColorMode}
        variant="unstyled"
        mr="152px"
      />
    </Flex>
  );
};
