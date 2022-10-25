import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import infoImage from '../images/info.png';

function About() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      m={'auto'}
    >
      <Image src={infoImage} />
    </Box>
  );
}

export default About;
