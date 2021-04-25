import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { useToggleTheme } from '../../context/ToggleThemeContext';

interface TravelTypeProps {
  src: string;
  text: string;
}

export const TravelType = ({ text, src }: TravelTypeProps) => {
  const { color } = useToggleTheme();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      align="center"
      justify="center"
    >
      {isWideVersion ? (
        <Image src={src} h="85px" w="85px" />
      ) : (
        <Image src="/images/circle.svg" h="8px" w="8px" mr="8px" />
      )}

      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontSize={24}
        color={color}
        textAlign="center"
        lineHeight="36px"
      >
        {text}
      </Text>
    </Flex>
  );
};
