import { Box, Image, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import product1Image from './images/product1.jpg';
import product2Image from './images/product2.jpg';
import product3Image from './images/r.jpg';

function BestSelling() {
  return (
    <Box className="row mt-5">
      <Stack
        alignItems="center"
        justifyContent="center"
        direction={['column', 'row']}
      >
        <VStack
          m={'auto'}
          w="100%"
          p="10px"
          borderRadius={'5px'}
          boxShadow="xl"
          height={'auto'}
        >
          <Image src={product1Image} />
        </VStack>
        <VStack
          m={'auto'}
          w="100%"
          p="10px"
          borderRadius={'5px'}
          boxShadow="xl"
          height={'auto'}
        >
          <Image src={product2Image} />
        </VStack>
        <VStack
          m={'auto'}
          w="100%"
          p="10px"
          borderRadius={'5px'}
          boxShadow="xl"
          height={'auto'}
        >
          <Image src={product3Image} />
        </VStack>
        <VStack
          m={'auto'}
          w="100%"
          p="10px"
          borderRadius={'5px'}
          boxShadow="xl"
          height={'auto'}
        >
          <Image src={product2Image} />
        </VStack>
      </Stack>
    </Box>
  );
}

export default BestSelling;
