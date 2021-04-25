import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export const BannerHome = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex>
      <Flex
        bgImage="url('/images/background-home.svg')"
        width="100%"
        maxWidth={1440}
        mx="auto"
        flex="1"
        height="335px"
        display="flex"
        justify="space-between"
        align="center"
      >
        <Flex
          flexDir="column"
          textAlign="left"
          pl={['36px', '48px', '64px', '80px', '96px', '140px']}
          pr={['8px']}
        >
          <Text
            color="white.800"
            fontFamily="Poppins"
            fontWeight="normal"
            fontSize={['20px', '28px', '36px']}
            lineHeight="54px"
          >
            6 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="white.700"
            fontFamily="Poppins"
            fontWeight="normal"
            fontSize={['14px', '20px']}
            lineHeight="30px"
          >
            Chegou a hora de você tirar do papel a viagem que você
            <br />
            sempre sonhou
          </Text>
        </Flex>

        {isWideVersion && (
          <Image
            src="/images/airplane.svg"
            alt="airplane"
            position="relative"
            top="76px"
            right="140px"
            w="100%"
            maxWidth={418}
            h="100%"
            maxH="270px"
          />
        )}
      </Flex>
    </Flex>
  );
};
