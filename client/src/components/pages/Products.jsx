import { Box } from '@chakra-ui/react';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import useFetch from '../../customHook/useCustom';
import SingleProduct from './SingleProduct';

function Products() {
  const [{ products, error, loading }] = useFetch(
    'https://fakestoreapi.com/products'
  );
  return (
    <Box className="row m-auto">
      {loading ? (
        <span className="spinner">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </span>
      ) : (
        products.map((product, id) => (
          <SingleProduct key={id} product={product} />
        ))
      )}
      <h2>{error ? error : ''}</h2>
    </Box>
  );
}

export default Products;
