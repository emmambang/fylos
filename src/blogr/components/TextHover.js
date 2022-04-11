import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function TextHover(props) {

  const [hoverDropdown, setHoverDropdown] = useState(false);

  return (
    <Flex direction={'column'} alignItems={hoverDropdown ? 'start' : 'end'}>
      <Text fontSize={'12px'} color={'white'} letterSpacing={'2px'} fontFamily={'Poppins'}
            cursor={'pointer'} onMouseEnter={() => setHoverDropdown(true)} onMouseLeave={() => setHoverDropdown(false)}>
        {props.name}
      </Text>
      <Box h={'2px'} bg={'white'} borderRadius={'full'}
           w={hoverDropdown ? 'full' : '0'} transition={'width 0.3s'} />
    </Flex>
  )
    ;
}

export default TextHover;