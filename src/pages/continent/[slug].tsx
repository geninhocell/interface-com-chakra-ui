import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { CityCard } from '../../components/Continent/CityCard';
import { BannerContinent } from '../../components/Continent/BannerContinent';
import { Header } from '../../components/Header';
import { useToggleTheme } from '../../context/ToggleThemeContext';
import { api } from '../../services/axios';
import { Bio } from '../../components/Continent/Bio';
import { InfoCard } from '../../components/Continent/InfoCard';

interface City {
  id: number;
  name: string;
  banner_url: string;
  ranking: number;
}

interface Country {
  id: number;
  name: string;
  flag_url: string;
  cities: City[];
}

interface Continent {
  id: number;
  name: string;
  description: string;
  url: string;
  banner_url: string;
  number_countries: number;
  number_languages: number;
  cities_in_the_top_100: Country[];
}

interface CityCard {
  id: string;
  flag_url: string;
  country: string;
  city: string;
  banner_url: string;
}

interface ContinentProps {
  continent: Continent;
  citiesCard: CityCard[];
  numberOfCities: number;
}

export default function Continent({
  continent,
  citiesCard,
  numberOfCities,
}: ContinentProps) {
  const { color } = useToggleTheme();

  return (
    <Flex direction="column">
      <Header linkUrl="/" />

      <BannerContinent
        name={continent.name}
        banner_url={continent.banner_url}
      />
      <Flex
        direction={['column', 'column', 'column', 'row']}
        mt="80px"
        w="100%"
        maxW="1440px"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Bio description={continent.description} />

        <Flex justify="space-between" w="490px" pr="16px">
          <InfoCard number={continent.number_countries} text="países" />
          <InfoCard number={continent.number_languages} text="línguas" />
          <InfoCard
            number={numberOfCities}
            text="cidades +100"
            informations={citiesCard}
          />
        </Flex>
      </Flex>

      <Flex w="100%" maxW="1440" mx="auto" direction="column" mt="80px">
        <Flex w="600px" pl="16px">
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="54px"
            textAlign="right"
            fontSize="36px"
            color={color}
          >
            Cidades +100
          </Text>
        </Flex>

        <SimpleGrid
          minChildWidth="240px"
          spacing={['6', '11']}
          w="100%"
          px="16px"
          alignItems="center"
          justifyContent="center"
          marginBottom="35px"
          marginTop="40px"
        >
          {citiesCard.map(city => (
            <CityCard city={city} />
          ))}
        </SimpleGrid>
        <Flex textAlign="center" mx="auto">
          Ícones feitos por
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/br/" title="Flaticon">
            www.flaticon.com
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continentResponse = await fetch(
    `http://localhost:4000/continents`,
  ).then(response => response.json());

  const continents = continentResponse.map((c: Continent) => ({
    params: { slug: String(c.id) },
  }));

  return {
    paths: continents,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({
  params,
}) => {
  const { slug } = params;

  const continentResponse = await api.get(
    `http://localhost:4000/continents/${slug}`,
  );

  if (!continentResponse) {
    return {
      notFound: true,
    };
  }

  const continent: Continent = continentResponse.data;

  const cities = [];

  continent.cities_in_the_top_100.forEach(country => {
    country.cities.forEach(city => {
      cities.push({
        id: `${country.id}-${city.id}`,
        flag_url: country.flag_url,
        country: country.name,
        city: city.name,
        banner_url: city.banner_url,
      });
    });
  });

  const numberOfCities = continent.cities_in_the_top_100.reduce(
    (acc, country) => {
      return acc + country.cities.length;
    },
    0,
  );

  return {
    props: {
      continent,
      citiesCard: cities,
      numberOfCities,
    },
    revalidate: 60 * 30, // 30min
  };
};
