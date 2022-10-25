import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    cPassword: '',
    profile: '',
  });

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleProfile = (e) => {
    setUser({ ...user, profile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password, cPassword, profile } =
      user;

    if (firstName === '') {
      toast({
        title: 'First name is required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (lastName === '') {
      toast({
        title: 'Last name is required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (email === '') {
      toast({
        title: 'Email id must be required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (phone === '') {
      toast({
        title: 'Phone id must be required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (profile === '') {
      toast({
        title: 'Profile must be required!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    if (password !== cPassword) {
      toast({
        title: 'Password mismatched!',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }

    const formData = new FormData();

    formData.set('firstName', firstName);
    formData.set('lastName', lastName);
    formData.set('email', email);
    formData.set('phone', phone);
    formData.set('password', password);
    formData.set('cPassword', cPassword);
    formData.set('profile', profile);

    axios
      .post('http://localhost:5000/user/signup/', formData, {
        'Content-Type': 'multipart/form-data',
      })
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK') {
          toast({
            title: 'You have successfully signed up!',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-right',
          });
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="email address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                placeholder="+91"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
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
            <FormControl id="confirm_password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="confirm password"
                  name="cPassword"
                  value={user.cPassword}
                  onChange={handleChange}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowConfirmPassword(
                        (showConfirmPassword) => !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="profile" isRequired>
              <FormLabel>Profile</FormLabel>
              <input
                type="file"
                style={{
                  border: '1px solid gray',
                  width: '100%',
                }}
                name="profile"
                onChange={handleProfile}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.2000',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user ?
                <Button
                  variant="link"
                  colorScheme="blue"
                  onClick={handleSignIn}
                  ml="5px"
                >
                  Sign in
                </Button>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
