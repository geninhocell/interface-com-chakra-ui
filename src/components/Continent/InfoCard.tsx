import {
  Flex,
  Icon,
  IconButton,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiInformationLine } from 'react-icons/ri';

import { useToggleTheme } from '../../context/ToggleThemeContext';

interface CityCard {
  id: string;
  city: string;
}

interface InfoCardProps {
  number: number;
  text: string;
  informations?: CityCard[];
}

export const InfoCard = ({
  number,
  text,
  informations = null,
}: InfoCardProps) => {
  const { color, info } = useToggleTheme();

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      fontFamily="Poppins"
      fontStyle="normal"
      fontWeight="600"
      lineHeight="72px"
      textAlign="center"
    >
      <Text fontSize="48px" color="yellow.900">
        {number}
      </Text>
      <Flex align="center" justify="center">
        <Text fontSize="24px" color={color}>
          {text}
        </Text>
        {informations && (
          <Flex>
            <Popover
              returnFocusOnClose={false}
              isOpen={isOpen}
              onClose={close}
              placement="top-end"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <IconButton
                  display="flex"
                  align="center"
                  justify="center"
                  aria-label="Info"
                  icon={
                    <Icon
                      w="16px"
                      h="16px"
                      color={info}
                      as={RiInformationLine}
                    />
                  }
                  size="lg"
                  onClick={open}
                  variant="unstyled"
                />
              </PopoverTrigger>
              <PopoverContent maxH="1440px">
                <PopoverHeader color={color} fontWeight="semibold">
                  Cidades +100
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <SimpleGrid minChildWidth="100px" spacing={['6', '11']}>
                    {informations.map(information => (
                      <Text color={color} key={information.id}>
                        {information.city}
                      </Text>
                    ))}
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
