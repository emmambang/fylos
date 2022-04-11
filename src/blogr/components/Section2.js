import React from 'react';
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import graph from '../images/illustration-editor-desktop.svg';
import '@fontsource/poppins';

function Section2() {

  const variant = useBreakpointValue({
    base: (
      <Image src={graph} />
    ),
    md: (
      <Box />
    ),
  });

  return (
    <Flex>
      <Flex direction={'column'} pl={{
        base: '30px',
        md: '50px'
      }} pr={{
        base: '30px',
        md: '0',
      }}
            justifyContent={'center'}
            fontFamily={'Poppins'} alignItems={{
        base: 'center',
        md: 'start',
      }} w={{
        base: "full",
        md: '50%'
      }}>
        <Text fontWeight={'semibold'} mt={'40px'} mb={'60px'}
              fontSize={'30px'} alignSelf={'center'} textAlign={"center"}>
          Designed for the future
        </Text>
        {variant}
        <Text fontWeight={'semibold'} mb={'20px'} textAlign={"center"}>
          Introducing an extensible editor
        </Text>
        <Text maxW={'600px'} textAlign={'justify'} mb={'50px'} lineHeight={1.8}>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </Text>
        <Text fontWeight={'semibold'} mb={'20px'} textAlign={"center"}>
          Robust content management
        </Text>
        <Text maxW={'600px'} textAlign={'justify'} lineHeight={1.8}>
          Flexible content management enables
          users to easily move through posts.
          Increase the usability of your blog by
          adding customized categories, sections,
          format, or flow. With this functionality,
          you're in full control.
        </Text>
      </Flex>
      <Image src={graph} zIndex={-1} w={'50%'}
             transform={'translateX(100px)'} bgPosition={"bottom"} display={{
        base: 'none',
        md: 'block',
      }} />
    </Flex>
  );
}

export default Section2;