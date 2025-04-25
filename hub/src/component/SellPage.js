// src/component/SellPage.js
import React, { useState } from "react";
import "../style/SellPage.css";

const SellPage = () => {
  const [product, setProductState] = useState({
    Title: "",
    Cat: "",
    price: "",
    img: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        setSuccessMsg("Product submitted successfully!");
        setProductState({
          Title: "",
          Cat: "",
          price: "",
          img: "",
        });
      } else {
        const errorData = await res.json();
        setSuccessMsg("Error: " + errorData.error);
      }
    } catch (err) {
      setSuccessMsg("Error submitting product. Please try again.");
      console.error(err);
    }
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
        {successMsg && <p className="success-message">{successMsg}</p>}
      </form>
    </div>
  );
};

export default SellPage;
