import { Button, Image, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/productSlice';

function Cart() {
  const products = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const toast = useToast();

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get('http://localhost:5000/api/getkey');

    const {
      data: { order },
    } = await axios.post('http://localhost:5000/api/checkout', {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: 'INR',
      name: 'Rezzak Ali',
      description: 'Tutorial of RazorPay',
      image: 'https://avatars.githubusercontent.com/u/87976069?v=4',
      order_id: order.id,
      callback_url: 'http://localhost:5000/api/paymentverification',
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#121212',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

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
      ></span>
      {products
        ? products.map((product, id) => (
            <>
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
            </>
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
        <Button size="sm" onClick={() => checkoutHandler(120)}>
          Checkout
        </Button>
      </span>
    </div>
  );
}

export default Cart;
