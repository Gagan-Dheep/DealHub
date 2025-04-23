// src/component/SellPage.js
import React, { useState } from "react";
import "../style/SellPage.css"; // Assuming you have a CSS file for styling
const SellPage = ({ setProduct }) => {
  const [product, setProductState] = useState({
    Title: "",
    Cat: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct((prevProducts) => [...prevProducts, product]);
    setProductState({
      Title: "",
      Cat: "",
      price: "",
      img: "",
    });
  };

  return (
    <div className="sell-page">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Title:</label>
          <input
            type="text"
            name="Title"
            value={product.Title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="Cat"
            value={product.Cat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellPage;
