import { Flex, Image, Text } from '@chakra-ui/react';
import { useToggleTheme } from '../../context/ToggleThemeContext';

interface City {
  id: string;
  flag_url: string;
  country: string;
  city: string;
  banner_url: string;
}

interface CityCardProps {
  city: City;
}

export const CityCard = ({ city }: CityCardProps) => {
  const { color, info } = useToggleTheme();

  return (
    <Flex
      key={String(city.id)}
      direction="column"
      paddingBottom="25px"
      maxWidth="256px"
      border="1px solid "
      borderRadius="4px"
      borderColor="rgba(255, 186, 8, 0.5)"
    >
      <Image
        src={city.banner_url}
        w="256px"
        h="173px"
        borderRadius="4px 4px 0 0"
      />

      <Flex justify="space-between" mt="18px" px="24px" align="center">
        <Flex direction="column">
          <Text
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="25px"
            fontSize="20px"
            color={color}
          >
            {city.city}
          </Text>
          <Text
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="26px"
            fontSize="16px"
            color={info}
          >
            {city.country}
          </Text>
        </Flex>

        <Image src={city.flag_url} w="30px" h="30px" />
      </Flex>
    </Flex>
  );
};
