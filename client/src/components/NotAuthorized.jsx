import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotAuthorized() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signin');
  }, [navigate]);

  return <></>;
}

export default NotAuthorized;
