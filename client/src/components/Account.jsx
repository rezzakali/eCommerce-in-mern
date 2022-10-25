import React, { useEffect } from 'react';

function Account() {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch('http://localhost:5000/user/auth/');
      console.log(user);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Accoutn page</h1>
    </div>
  );
}

export default Account;
