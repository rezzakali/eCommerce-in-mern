import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from '../components/styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Rezzak. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <a
              label={'Linkedin'}
              target="_blank"
              rel="noreferrer"
              href={'https://www.linkedin.com/in/rezzak-ali-18149a1ab/'}
            >
              <FaLinkedin />
            </a>
            <a
              label={'Instagram'}
              target="_blank"
              rel="noreferrer"
              href={'https://www.instagram.com/rezzak134/'}
            >
              <FaInstagram />
            </a>
            <a
              label={'Facebook'}
              target="_blank"
              rel="noreferrer"
              href={'https://www.facebook.com/rezzakali22'}
            >
              <FaFacebook />
            </a>
            <a
              label={'YouTube'}
              target="_blank"
              rel="noreferrer"
              href={'https://www.youtube.com/channel/UC2TrsjWZfR9XqcdhcDv8bcQ'}
            >
              <FaYoutube />
            </a>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}
export default Footer;
