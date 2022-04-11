import {
  HStack,
  Flex,
  Text,
  Image,
  Icon,
  useBreakpointValue,
  IconButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  useDisclosure, DrawerBody,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import "@fontsource/poppins"

function Navbar() {
  const color = '#26242F';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const variant = useBreakpointValue({
    base: (
      <IconButton
        icon={<Icon as={AiOutlineMenu} w={6} h={6} color="purple" />}
        aria-label="DarkMode Switch"
        colorScheme={'transparent'}
        _focus={{}}
        onClick={onOpen}
      />
    ),
    md: (
      <Flex px={"8px"} pt={"8px"}>
        <Text color={color} fontFamily={"poppins"} cursor={"pointer"}> Filière </Text>
        <Text color={color} px={'20px'} fontFamily={"poppins"} cursor={"pointer"}>
          Team
        </Text>
        <Text color={color}  fontFamily={"poppins"} cursor={"pointer"}> Sign In </Text>
      </Flex>
    ),
  });

  return (
    <>
      <HStack w={'100%'} pt={"15px"} justifyContent={'space-between'} px={"12px"}>
        <Image src={logo} alt="logo" width={'100px'} />
        {variant}
      </HStack>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
