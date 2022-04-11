import React from 'react';
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import laptop from '../images/illustration-laptop-desktop.svg';
import '@fontsource/poppins';

function Section4() {

  const variant = useBreakpointValue({
    base: (
      <Image src={laptop} />
    ),
    md: (
      <Box />
    ),
  });

  return (
    <Flex>
      <Image src={laptop} zIndex={-1} w={'50%'}
             transform={'translateX(-100px)'} bgPosition={"bottom"} display={{
        base: 'none',
        md: 'block',
      }} />
      <Flex direction={'column'} pr={{
        base: '30px',
        md: '50px'
      }} pl={{
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
        {variant}
        <Text fontWeight={'semibold'} mb={'20px'} textAlign={"center"}>
          Free, open, simple
        </Text>
        <Text maxW={'600px'} textAlign={'justify'} mb={'50px'} lineHeight={1.8}>
          Blogr is a free and open source
          application backed by a large community
          of helpful developers. It supports features
          such as code syntax highlighting, RSS
          feeds, social media integration, third-
          party commenting tools, and works
          seamlessly with Google Analytics. The
          architecture is clean and is relatively easy
          to learn.
        </Text>
        <Text fontWeight={'semibold'} mb={'20px'} textAlign={"center"}>
          Powerful tooling
        </Text>
        <Text maxW={'600px'} textAlign={'justify'} lineHeight={1.8}>
          Batteries included. We built a simple and
          straightforward CLI tool that makes
          customization and deployment a breeze.
          but capable of producing even the most
          complicated sites.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Section4;