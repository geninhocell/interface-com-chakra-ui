import { Divider, Flex, Text } from '@chakra-ui/react';

import { GetStaticProps } from 'next';
import { BannerHome } from '../components/Home/BannerHome';
import { Header } from '../components/Header';
import { useToggleTheme } from '../context/ToggleThemeContext';
import { Travel } from '../components/Home/Travel';
import { Carousel } from '../components/Home/Carousel';

interface Continent {
  id: number;
  name: string;
  description: string;
  info: string;
  url: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const { color } = useToggleTheme();

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <BannerHome />
      <Travel marginTop="80px" />
      <Divider
        mx="auto"
        marginTop="80px"
        borderColor={color}
        w={90}
        border="2px"
      />

      <Text
        textAlign="center"
        fontFamily="Poppins"
        fontStyle="normal"
        fontSize="36px"
        lineHeight="54px"
        color={color}
        mt="52px"
      >
        Vamos nessa? <br /> Então escolha o seu continente
      </Text>

      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const continentsResponse = await fetch(
    'http://localhost:4000/continents',
  ).then(response => response.json());

  if (!continentsResponse) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continents: continentsResponse,
    },
    revalidate: 60 * 30, // 30min
  };
};
