import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GitHubIcon, GoogleIcon } from './ProviderIcons';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // with google
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  const toast = useToast();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (email === '') {
      toast({
        title: 'Email must be required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (password === '') {
      toast({
        title: 'Password is required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    axios
      .post('http://localhost:5000/user/signin/', user, {
        withCredentials: 'include',
      })
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          const response = res.data.token;
          localStorage.setItem('token', response);
          toast({
            title: 'You have successfully signed in! 😎',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          navigate('/');
        }

        if (res.status === 404) {
          toast({
            title: 'Invalid credentials!',
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
        }
      })
      .catch((err) => {
        if (err) {
          toast({
            title: 'Sign in failed! 🙄',
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
          navigate('/');
        }
      });
  };
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container
      maxW="lg"
      py={{ base: '2', md: '5' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading
              size={useBreakpointValue({ base: 'xs', md: 'sm' })}
              fontSize={'3xl'}
            >
              Sign in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account ?</Text>
              <Button variant="link" colorScheme="blue" onClick={handleSignUp}>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <br />
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useColorModeValue('gray.40', 'gray.700')}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl id="email" isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AtSignIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button colorScheme="blue" onClick={handleSubmit}>
              Sign in
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <Box>
              <ButtonGroup variant="outline" spacing="4" width="full">
                <Button width="full" onClick={google}>
                  <GoogleIcon />
                </Button>
                <Button width="full" onClick={github}>
                  <GitHubIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default Signin;
