import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import DataFooter from './DataFooter';

function Section5() {
  return (
    <Flex w={'full'} bg={'#24242C'} mt={'100px'} justifyContent={'space-evenly'}
          borderTopRightRadius={'100px'} direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'start' }} pt={'30px'} pb={'60px'}>
      <Text fontSize={'50px'} color={'white'} fontWeight={'bold'} letterSpacing={'2px'} fontFamily={'Poppins'}>
        Blogr
      </Text>
      {
        [['Product', ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']],
          ['Company', ['About', 'Team', 'Blog', 'Careers']], ['Connect', ['Contact', 'Newsletter', 'Linked']]].map((value) => (
          <DataFooter name={value[0]} children={value[1]} />
        ))
      }
    </Flex>
  );
}

export default Section5;