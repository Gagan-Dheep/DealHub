// // src/App.js
// import './App.css';
// import React, { useState } from 'react';
// import Nav from './component/Nav';
// import Footer from './component/Footer';
// import Rout from './Rout';
// import Product_Detail from './component/Product_Detail';
// import SellPage from './component/SellPage'; // Import SellPage
// import { BrowserRouter } from 'react-router-dom';
// import Cart from './component/Cart'; // Import Cart
// function App() {
//   const [product, setProduct] = useState([]); // Initially empty products
//   const [detail, setDetail] = useState([]);
//   const [close, setClose] = useState(false);

//   const view = (product) => {
//     setDetail([{ ...product }]);
//     setClose(true);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Nav />
        
//         {/* Pass setProduct to Rout */}
//         <Rout 
//           product={product} 
//           setProduct={setProduct} 
//           detail={detail} 
//           view={view} 
//           close={close} 
//           setClose={setClose} 
//         />
        
//         {/* Footer component - if you wish to include it */}
//         {/* <Footer /> */}
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Rout from './Rout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context/CartContext';
// import ProtectedPage from "./components/Protected/ProtectedPage";
import { AuthProvider } from './component/AuthContext';

function App() {
  const [product, setProduct] = useState([]);
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  return (
    <AuthProvider> 
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <Rout 
          product={product} 
          setProduct={setProduct} 
          detail={detail} 
          view={view} 
          close={close} 
          setClose={setClose} 
        />
        {/* <Footer /> */}
      </BrowserRouter>
    </CartProvider>
    </AuthProvider> 
  );
}

export default App;
