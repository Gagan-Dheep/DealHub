// import React, { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
// import "../style/Cart.css";

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   // Calculate total cost
//   //   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + parseFloat(item.price),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cartItems.map((item, index) => (
//             <div className="cart-item" key={index}>
//               <img src={item.img} alt={item.Title} />
//               <div>
//                 <h3>{item.Title}</h3>
//                 <p>₹{item.price}</p>
//               </div>
//             </div>
//           ))}

//           {/* Display total cost */}
//           <div className="cart-total">
//             <h3>Total: ₹{totalPrice.toLocaleString("en-IN")}</h3>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../style/Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Function to remove item from cart by unique ID
  const handleRemoveItem = (itemId) => {
    console.log("Removing item with ID:", itemId); // Debug log
    if (itemId === undefined) {
      console.error("Item ID is undefined");
      return;
    }
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  // Calculate total cost
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}> {/* Ensure unique key */}
              <img src={item.img} alt={item.Title} />
              <div>
                <h3>{item.Title}</h3>
                <p>₹{item.price}</p>
              </div>
              <button
                className="remove-item"
                onClick={() => handleRemoveItem(item.id)}
              >
                &#10005; {/* Cross (times) symbol */}
              </button>
            </div>
          ))}

          {/* Display total cost */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toLocaleString("en-IN")}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
