import React from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';
import TextHover from './TextHover';

function DataFooter(props) {
  return (
    <Flex pt={{base: '50px', md: '0px'}} direction={"column"} alignItems={{base: "center", md: "start"}}>
      <Text fontSize={'20px'} color={'white'} fontWeight={'bold'} fontFamily={'Poppins'} mb={'15px'}>
        {props.name}
      </Text>
      <VStack alignItems={{base: 'center', md: 'start'}} spacing={'10px'}>
        {
          props.children.map((value) => (
            <TextHover name={value} />
          ))
        }
      </VStack>
    </Flex>
  );
}

export default DataFooter;