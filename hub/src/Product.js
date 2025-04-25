// src/Product.js
import React, { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import "./product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const view = (product) => {
    setDetail([product]);
    setClose(true);
  };

  return (
    <>
      {close && (
        <div className="product_details">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineClose />
            </button>

            {detail.map((e, index) => (
              <div className="productbox" key={index}>
                <div className="img-box">
                  <img src={e.img} alt={e.Title} />
                </div>
                <div className="detail">
                  <h4>{e.Cat}</h4>
                  <h2>{e.Title}</h2>
                  <h3>₹{e.price}</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="product">
        <div className="container">
          {product.length === 0 ? (
            <div className="conproduct">
              <p className="NoProduct">No products available</p>
            </div>
          ) : (
            product.map((e, index) => (
              <div className="box" key={index}>
                <div className="img-box">
                  <img src={e.img} alt={e.Title} />
                </div>

                <div className="icon">
                  <li>
                    <BsCartCheckFill className="ibox" />
                  </li>
                  <li onClick={() => view(e)}>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineHeart className="ibox" />
                  </li>
                </div>

                <div className="detail">
                  <p>{e.Cat}</p>
                  <h3>{e.Title}</h3>
                  <h3>₹{e.price}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
