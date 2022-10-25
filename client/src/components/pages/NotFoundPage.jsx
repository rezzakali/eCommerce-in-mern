import { Box, Center, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

function NotFoundPage() {
  return (
    <Box>
      <Stack
        h={'80vh'}
        alignItems="center"
        justifyContent="center"
        direction={['column', 'row']}
      >
        <VStack>
          <Center fontSize="5xl">404 | Page Not Found</Center>
          <br />
          <Center fontSize="2xl">
            You just hit a route that doesn't exist... the sadness.😢
          </Center>
        </VStack>
      </Stack>
    </Box>
  );
}

export default NotFoundPage;
