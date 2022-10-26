import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Cart from './components/Cart';
import GotoTopArrow from './components/GotoTopArrow';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFoundPage from './components/pages/NotFoundPage';
import ProductDetails from './components/pages/ProductDetails';
import Products from './components/pages/Products';
import PaymentSuccess from './components/PaymentSuccess';
import Signin from './user/Signin';
import Signup from './user/Signup';

function App() {
  const auth = localStorage.getItem('token');
  return (
    <>
      {auth ? (
        <>
          <Navbar />
          <Box m={[3, 5]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}

      <GotoTopArrow />
    </>
  );
}

export default App;
