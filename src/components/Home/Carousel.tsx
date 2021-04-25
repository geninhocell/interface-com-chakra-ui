import { useMemo } from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

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

export const Carousel = ({ continents }: HomeProps) => {
  const slides = useMemo(() => {
    return continents.map(c => {
      return (
        <SwiperSlide key={`slide-${c.id}`} tag="li">
          <Flex
            bgImage={`url(${c.url})`}
            width="100%"
            maxWidth={1240}
            mx="auto"
            height="450px"
            justify="center"
            align="center"
            direction="column"
            fontFamily="Poppins"
            fontWeight="bold"
            fontStyle="normal"
            textAlign="center"
          >
            <Link href={`/continent/${c.id}`}>
              <Text lineHeight="72px" fontSize="48px" color="white.800">
                {c.name}
              </Text>
              <Text fontSize="24px" lineHeight="36px" color="white.700">
                {c.info}
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
      );
    });
  }, [continents]);

  return (
    <Flex mx="auto" w="100%" maxW="1240px" h="100%" maxH="450px">
      {slides.length > 0 && (
        <Swiper
          spaceBetween={500}
          slidesPerView={1}
          tag="section"
          wrapperTag="ul"
          style={{
            marginBottom: 40,
            marginTop: 80,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          navigation
          pagination
          id="main"
          loop
        >
          {slides}
        </Swiper>
      )}
    </Flex>
  );
};
