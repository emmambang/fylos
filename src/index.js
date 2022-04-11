import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Fylo from './fylo/App';
import { ParallaxProvider } from 'react-scroll-parallax';
import Blogr from './blogr/App';

ReactDOM.render(
  // <StrictMode>
    <ChakraProvider>
      <ParallaxProvider>
        <Blogr />
      </ParallaxProvider>
    </ChakraProvider>
  // </StrictMode>,
,
  document.getElementById('root')
);
