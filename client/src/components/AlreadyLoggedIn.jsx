import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return (
    // <Box>
    //   <Stack
    //     h={'80vh'}
    //     alignItems="center"
    //     justifyContent="center"
    //     direction={['column', 'row']}
    //   >
    //     <VStack>
    //       <Center fontSize="5xl">You Are Already Logged in</Center>
    //       <br />
    //       <Center fontSize="2xl">
    //         You can access sing in and sign up page after log out.😢
    //       </Center>
    //       <br />
    //       <Button>
    //         <MdLogout />
    //       </Button>
    //     </VStack>
    //   </Stack>
    // </Box>
    <></>
  );
}

export default NotFoundPage;
