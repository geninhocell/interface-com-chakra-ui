import { Flex, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

import { TravelType } from './TravelType';

export const Travel = ({ ...rest }) => {
  return (
    <SimpleGrid
      columns={[2, 2, 5]}
      minChildWidth="136px"
      w="100%"
      mx="auto"
      maxW={1160}
      h={145}
      {...rest}
      align="center"
      justify="space-between"
    >
      <TravelType src="/images/travel/cocktail.svg" text="vida noturna" />

      <TravelType src="/images/travel/surf.svg" text="praia" />

      <TravelType src="/images/travel/building.svg" text="moderno" />

      <TravelType src="/images/travel/museum.svg" text="clássico" />

      <TravelType src="/images/travel/earth.svg" text="e mais" />
    </SimpleGrid>
  );
};
