import React, { useEffect, useState } from 'react';
import '@fontsource/poppins';
import { Box } from '@chakra-ui/react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

function Blogr() {

  useEffect(
    () => {
      document.body.style.overflowX = 'hidden';
    },
    [],
  );

  return (
    <Box overflowX={'hidden'}>
      <Section1 />
      <Box h={'50px'} />
      <Section2 />
      {/*<Section3 />*/}
      <Section4 />
      <Section5 />
    </Box>
  );
}

// <>
//   <Heading fontFamily={'Poppins'}>Hoverable Dropdown</Heading>
//   <Text fontFamily={'Poppins'}>Move the mouse over the text below to open the dropdown content.</Text>
//
//   <Box>
//     <Text fontFamily={'Poppins'} onMouseEnter={() => setIsShown("block")}
//           onMouseLeave={() => setIsShown("none")}>Mouse over me</Text>
//     <Flex display={isShown} pos={'absolute'} bg={'#f9f9f9'}
//           w={'160px'} boxShadow={'0px 8px 16px 0px rgba(0,0,0,0.2)'} px={'12px'} py={'16px'}
//           zIndex={1}>
//       <Text fontFamily={'Poppins'}>Hello World!</Text>
//     </Flex>
//   </Box>
//   <Text>Real madrid</Text>
// </>
export default Blogr;