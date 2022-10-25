import { Checkbox, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BuyForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const notify = () =>
    toast('ordered success!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  const onSubmit = (data) => {
    console.log(data);
    notify();
    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '70%', margin: 'auto' }}
      >
        <Input
          {...register('fullname', { required: true, maxLength: 20 })}
          placeholder="enter your full name"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          {...register('email', {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          placeholder="enter your email address"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          type="number"
          {...register('number')}
          placeholder="+91"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          type="text"
          {...register('village')}
          placeholder="village name"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          type="text"
          {...register('police station')}
          placeholder="police station"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          type="text"
          {...register('district')}
          placeholder="district"
          required={true}
          size="md"
        />
        <br />
        <br />
        <Input
          type="number"
          {...register('number')}
          placeholder="pin code"
          required={true}
          size="md"
        />
        <br />
        <br />
        <span style={{ display: 'flex' }}>
          <Checkbox {...register('checkbox')} required={true} />
          <Text ml="5px">accept terms and conditions</Text>
        </span>
        <br />
        <Input type="submit" value="Order" />
      </form>{' '}
    </>
  );
}
