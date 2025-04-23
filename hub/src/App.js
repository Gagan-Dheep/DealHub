// src/App.js
import './App.css';
import React, { useState } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Rout from './Rout';
import Product_Detail from './component/Product_Detail';
import SellPage from './component/SellPage'; // Import SellPage
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [product, setProduct] = useState([]); // Initially empty products
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        
        {/* Pass setProduct to Rout */}
        <Rout 
          product={product} 
          setProduct={setProduct} 
          detail={detail} 
          view={view} 
          close={close} 
          setClose={setClose} 
        />
        
        {/* Footer component - if you wish to include it */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
