import { Box, Button, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { FcApproval } from 'react-icons/fc';
import { MdDeliveryDining, MdOutlineSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';
import BestSelling from '../BestSelling';
import onlineShopingImage from '../images/online_shoping.png';
import Slick from '../Slick';

function Home() {
  return (
    <Box
      className="text-center"
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Box className="row p-5">
        <Box className="col-sm-12 col-md-6 col-lg-6 mt-5">
          <Text fontSize="5xl">We stay on top</Text>
          <Text fontSize="5xl">so you can be on top</Text>
          <Text>Minimalist | Creative | Flexible</Text>
          <Button size="md" mt="25px">
            Explore Now
          </Button>
        </Box>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Image src={onlineShopingImage} />
        </div>
      </Box>
      <Box className="row">
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
            height={'150px'}
          >
            <FcApproval />
            <Text>
              Quality Products & <br /> Best Price
            </Text>
          </VStack>
          <VStack
            m={'auto'}
            w="100%"
            p="10px"
            borderRadius={'5px'}
            boxShadow="xl"
            height={'150px'}
          >
            <RiRefund2Fill />
            <Text>
              Easy Returns & <br /> Customization
            </Text>
          </VStack>
          <VStack
            m={'auto'}
            w="100%"
            p="10px"
            borderRadius={'5px'}
            boxShadow="xl"
            height={'150px'}
          >
            <MdDeliveryDining />
            <Text>
              Free Delivery, installation & <br /> Maintenance
            </Text>
          </VStack>
          <VStack
            m={'auto'}
            w="100%"
            p="10px"
            borderRadius={'5px'}
            boxShadow="xl"
            height={'150px'}
          >
            <MdOutlineSupportAgent />
            <Text>
              Our Impressive Customer & <br /> Support
            </Text>
          </VStack>
        </Stack>
      </Box>
      <br />
      <br />
      <Text fontSize="5xl" m={'auto'}>
        Best Selling
      </Text>
      <BestSelling />
      <br />
      <Slick />
      {/* cookie */}
      <CookieConsent
        location="bottom"
        buttonText="X"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        <Text> This website uses cookies to enhance the user experience.</Text>
      </CookieConsent>
    </Box>
  );
}

export default Home;
