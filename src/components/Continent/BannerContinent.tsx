import { Flex, Text } from '@chakra-ui/react';

interface BannerContinentProps {
  banner_url: string;
  name: string;
}

export const BannerContinent = ({ banner_url, name }: BannerContinentProps) => {
  return (
    <Flex>
      <Flex
        bgImage={`url(${banner_url})`}
        width="100%"
        maxWidth={1440}
        mx="auto"
        flex="1"
        height="500px"
      >
        <Text
          position="relative"
          left="140px"
          top="370px"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight={600}
          fontSize="48px"
          lineHeight="72px"
          color="white.800"
        >
          {name}
        </Text>
      </Flex>
    </Flex>
  );
};
