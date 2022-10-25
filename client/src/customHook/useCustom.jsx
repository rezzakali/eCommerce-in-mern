import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
        setError('');
      })
      .catch(() => {
        setLoading(false);
        setProducts([]);
        setError('There was a server side error!');
      });
  }, [url]);

  return [{ products, error, loading }];
};

export default useFetch;
