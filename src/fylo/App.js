import { useColorMode, VStack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function Fylo() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <VStack spacing={0}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </VStack>
  );
}

export default Fylo;
