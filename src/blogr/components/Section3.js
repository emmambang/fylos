import React, { Component } from 'react';
import { Box, Text } from '@chakra-ui/react';

function Section3() {
    return (
      <Box mt={"400px"} w={"full"} h={"200px"} bg={"#3D4061"}
           borderTopRightRadius={"20px"}
           borderBottomLeftRadius={"20px"}
           clipPath={"inset(10px round 80px 20px 30px 10px)"} />
    );
}

export default Section3;