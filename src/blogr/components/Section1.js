import React, { useState } from 'react';
import bg from '../images/bg-pattern-intro-desktop.svg';
import logo from '../images/logo.svg';
import {
  Accordion, Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import '@fontsource/poppins';
import Dropdown from './Dropdown';
import { Squash as Hamburger } from 'hamburger-react';
import AccordionPopup from './AccordionPopup';

function Section1() {

  const [menu, setMenu] = useState(false);

  const variant = useBreakpointValue({
    base: (
      <Hamburger toggled={menu} toggle={setMenu} w={10} h={10} color='white' />
    ),
    md: (
      <>
        <HStack spacing={'20px'}>
          {
            [['Product', ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']],
              ['Company', ['About', 'Team', 'Blog', 'Careers']], ['Connect', ['Contact', 'Newsletter', 'Linked']]].map(value => (
              <Dropdown name={value[0]} children={value[1]} />
            ))
          }
        </HStack>
        <Spacer />
        <Text color={'white'} fontFamily={'Poppins'} fontSize={'16px'}
              cursor={'pointer'} mr={'12px'}>
          Login
        </Text>
        <Button color={'#E65F64'} bg={'white'} _hover={{}} _focus={{}}
                fontFamily={'Poppins'} fontSize={'15px'} borderRadius={'full'}
                _active={{}}>
          Sign Up
        </Button>
      </>
    ),
  });

  return (
    <Flex alignItems={'center'} direction={'column'} w={'full'} bg={'#FE846D'} bgImage={bg}
          bgSize={'cover'} bgRepeat={'no-repeat'}
          bgPos={'right'} px={{
      base: '15px',
      md: '65px',
    }} pt={'50px'} pb={'140px'} borderBottomLeftRadius={'100px'}>
      <Flex w={'full'} alignItems={'center'} justifyContent={{
        base: 'space-between',
        md: 'start',
      }}>
        <Image src={logo} mr={'80px'} />
        {variant}
      </Flex>
      <Text color={'transparent'} fontFamily={'Poppins'} fontWeight={'bold'}
            fontSize={'40px'} mt={'80px'} textAlign={'center'} sx={{
        '-webkit-text-stroke': '1px white',
      }}>
        A modern publishing platform
      </Text>
      <Text color={'white'} fontFamily={'Poppins'} my={'25px'} textAlign={'center'}>
        Grow your audience and build your online brand
      </Text>
      <Flex gap={'12px'}>
        <Button borderRadius={'full'} fontFamily={'Poppins'} bg={'white'}
                color={'#E65F64'} fontSize={'11px'}
                _active={{}} _hover={{}} _focus={{}}>
          Start for free
        </Button>
        <Button borderRadius={'full'} fontFamily={'Poppins'} borderColor={'white'} color={'white'}
                borderWidth={'2px'} bg={'transparent'} _active={{}} _hover={{}} _focus={{}} fontSize={'11px'}>
          Learn more
        </Button>
      </Flex>
        <Flex w={'calc(100% - 30px)'}
              direction={'column'}
              className={'popup'}
              bg={'white'} position={'absolute'}
              top={{
                base: !menu ? '0'
                  : '120px',
                md: '0',
              }}
              opacity={{
                base: !menu ? '0' : '1'
                , md: '0',
              }} zIndex={{
          base: !menu ? -1 : 1
          , md: -1,
        }} borderRadius={'20px'} transition={'0.3s'}
              boxShadow={'1px 1px 8px gray'} p={'10px'}>
          <Accordion allowToggle>
            {
              [['Product', ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']],
                ['Company', ['About', 'Team', 'Blog', 'Careers']], ['Connect', ['Contact', 'Newsletter', 'Linked']]]
                .map((value, index) => (
                  <Box>
                    {index !== 0 && <Box h={'20px'} />}
                    <AccordionPopup name={value[0]} children={value[1]} />
                  </Box>
                ))
            }
          </Accordion>
          <Flex direction={'column'} alignItems={'center'} w={'full'}>
            <Box h={'1.5px'} bg={'blackAlpha.50'} w={'full'} mt={'10px'} />
            <Button borderRadius={'full'} fontFamily={'Poppins'} bg={'white'}
                    fontSize={'18px'}
                    _active={{}} _hover={{}} _focus={{}} my={'10px'}>
              Login
            </Button>
            <Button borderRadius={'full'} fontFamily={'Poppins'} color={'white'}
                    bgGradient={'linear-gradient(.25turn, #FE856E, #C23845)'} _active={{}} _hover={{}} _focus={{}}
                    fontSize={'18px'}>
              Sign up
            </Button>
          </Flex>
        </Flex>
    </Flex>
  );
}

export default Section1;