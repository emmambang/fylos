import { HStack, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
  return (
    <HStack w={'100%'} justifyContent={'space-between'}>
      <img src="./images/logo.svg" className="App-logo" alt="loo" />
      <Flex
        w={'50px'}
        h={'50px'}
        bg={'gray'}
        justifyContent={'flex-end'}
        borderRadius={'full'}
      >
        <Box
          w={'10px'}
          h={'10px'}
          bg={'red'}
          pos={'relative'}
          borderRadius={'full'}
          top={"5px"}
          left={'2px'}
        />
      </Flex>
      <Flex>
        <Text color={'blue.400'}> Filière </Text>
        <Text color={'blue.400'} px={'10px'}>
          {' '}
          Team{' '}
        </Text>
        <Text color={'blue.400'}> Sign In </Text>
      </Flex>
    </HStack>
  );
}

export default Navbar;
