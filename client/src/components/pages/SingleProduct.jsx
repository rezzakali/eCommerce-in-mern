import {
  Box,
  Button,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../../features/productSlice';
import BuyForm from '../BuyForm';

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState('md');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const addToCartHandler = (product) => {
    dispatch(add(product));
    toast({
      title: 'Item added',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <Stack
      className="col-sm-12 col-md-6 col-lg-4 mt-5"
      style={{
        margin: 'auto',
      }}
    >
      <VStack>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            h="470px"
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
          >
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${product.image})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={product.image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <small
                color={'gray.500'}
                fontSize={'sm'}
                texttransform={'uppercase'}
              >
                {product.title}{' '}
                <Link to={`/productdetails/${product.id}`}>More...</Link>
              </small>
              <Stack direction={'row'} align={'center'}>
                <Text mr="90px">Rating: {product.rating.rate}</Text>
                <Text fontWeight={800} fontSize={'xl'}>
                  ${product.price}
                </Text>
              </Stack>
            </Stack>
            <hr className="mt-4" />

            <div
              className="mt-3"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <button
                style={{ marginTop: '5px' }}
                onClick={() => addToCartHandler(product)}
              >
                <AiOutlineShoppingCart />
              </button>
              <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalContent>
                  <ModalHeader>
                    Please provide your information for buy this product
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <BuyForm />
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                size="sm"
                onClick={() => handleSizeClick(size)}
                key={size}
                m={4}
              >
                Buy Now
              </Button>
            </div>
          </Box>
        </Center>
      </VStack>
    </Stack>
  );
}

export default SingleProduct;
