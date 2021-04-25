import { Text } from '@chakra-ui/react';

import { useToggleTheme } from '../../context/ToggleThemeContext';

interface BioProps {
  description: string;
}

export const Bio = ({ description }: BioProps) => {
  const { color } = useToggleTheme();

  return (
    <Text
      fontFamily="Poppins"
      fontStyle="normal"
      fontWeight="normal"
      fontSize="24px"
      lineHeight="36px"
      color={color}
      w="600px"
      pl="16px"
    >
      {description}
    </Text>
  );
};
