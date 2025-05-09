// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;





import React, { createContext, useState } from "react";

// Create a context for Cart
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to generate a unique ID (using Date.now())
  const generateUniqueId = () => {
    return Date.now(); // Using current time to generate a unique ID
  };

  // Function to add product to cart
  const addToCart = (product) => {
    if (!product) {
      console.error("Product is missing");
      return;
    }

    // If product doesn't have an ID, assign it a unique ID
    const productWithId = { ...product, id: product.id || generateUniqueId() };

    setCartItems((prevItems) => [...prevItems, productWithId]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
