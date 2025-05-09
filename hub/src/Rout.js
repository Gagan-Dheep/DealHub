// src/Rout.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Product from "./Product";
import SellPage from './component/SellPage'; // Import SellPage
import Cart from './component/Cart'; // Import Cart
import ProtectedPage from "./component/Protected/ProtectedPage";
const Rout = ({ detail, product, view, close, setClose, setProduct }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product product={product} detail={detail} view={view} close={close} setClose={setClose} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sell" element={<SellPage setProduct={setProduct} />} /> {/* Add route for SellPage */}
        <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
        <Route path="/protected" component={ProtectedPage} />
      </Routes>
    </>
  );
}

export default Rout;
