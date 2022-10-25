import { Button, Image, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/productSlice';

function Cart() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleRemove = (id) => {
    setTimeout(() => {
      dispatch(remove(id));
    }, 200);
    toast({
      title: 'Item removed',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top-right',
    });
  };
  return (
    <div>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '20px',
        }}
      >
        Total : $ 120.00
      </span>
      {products
        ? products.map((product, id) => (
            <div
              key={id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '10px',
                border: '0.1px solid gray',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              <Image
                src={product.image}
                rounded={'lg'}
                height={110}
                width={100}
                objectFit={'cover'}
              />
              <Text>{product.title}</Text>
              <Button size="sm" onClick={() => handleRemove(product.id)}>
                remove
              </Button>
              <Text>$ {product.price}</Text>
            </div>
          ))
        : ''}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '40px',
        }}
      >
        <Button size="sm">Checkout</Button>
      </span>
    </div>
  );
}

export default Cart;
