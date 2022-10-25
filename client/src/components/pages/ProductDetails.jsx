import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../../features/productSlice';

function ProductsDetails() {
  const [singleProduct, setSingleProduct] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();
  const { id } = useParams();

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

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [id]);

  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 col-lg-6">
        {singleProduct ? (
          <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
            <Box>
              <Image
                src={singleProduct.image}
                rounded={'lg'}
                objectFit={'cover'}
              />
            </Box>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <Heading fontSize="3xl">{singleProduct.title}</Heading>
        <br />
        <Text>$ {singleProduct.price}</Text>
        <br />
        <select name="select size" id="">
          <option value="">select size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <br />
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Input type="number" defaultValue={1} size="xs" w="60px" />
          <Button
            ml="7px"
            size="xs"
            onClick={() => addToCartHandler(singleProduct)}
          >
            Add to cart
          </Button>
        </div>
        <br />
        <br />
        <Heading fontSize="2xl">Product Details</Heading>
        <br />
        <Text>{singleProduct.description}</Text>
        <br />
        <Button size="sm">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductsDetails;
