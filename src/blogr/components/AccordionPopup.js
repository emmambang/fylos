import React from 'react';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, VStack } from '@chakra-ui/react';

function AccordionPopup({ name, children }) {
  return (
    <AccordionItem border={'none'}>
      <h2>
        <AccordionButton _active={{}} _hover={{}} _focus={{}} justifyContent={'center'}>
          <Box fontFamily={'Poppins'} fontSize={'16px'}>
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <VStack bg={'#EFEFF1'} py={'20px'} spacing={"12px"}>
          {children.map((value) => (
            <Text color={'#677079'} fontFamily={'Poppins'} fontSize={'14px'} cursor={"pointer"}>
              {value}
            </Text>
          ))}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AccordionPopup;