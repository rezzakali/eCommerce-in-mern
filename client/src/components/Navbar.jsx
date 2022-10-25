import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link, NavLink } from 'react-router-dom';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: 'about',
    name: 'About',
  },
  {
    to: 'products',
    name: 'Products',
  },
];

export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartCount = useSelector((state) => state.product);

  const navigate = useNavigate();

  const handleAccount = () => {
    navigate('/account');
  };
  const logOutHandler = () => {
    fetch('http://localhost:5000/user/logout/', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 100);
        localStorage.removeItem('token');
      }
    });
  };
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>eCom</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, id) => (
                <NavLink key={id} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Link to="/cart" style={{ marginRight: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AiOutlineShoppingCart />{' '}
                <span
                  style={{
                    background: 'blue',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '12px',
                    marginBottom: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    color: '#CBD5E0',
                  }}
                >
                  {cartCount.length}
                </span>
              </div>
            </Link>

            <Button onClick={toggleColorMode} mr="20px">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.githubusercontent.com/u/87976069?v=4'}
                />
              </MenuButton>

              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'xl'}
                    src={'https://avatars.githubusercontent.com/u/87976069?v=4'}
                  />
                </Center>
                <br />
                <Center>
                  <p>username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem onClick={handleAccount}>Account Settings</MenuItem>
                <MenuItem onClick={logOutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, id) => (
                <NavLink key={id} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
