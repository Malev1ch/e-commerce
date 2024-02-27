import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="product" onClick={() => navigate(`/product/${item.id}`)}>
      <img src={item.thumbnail} className="main-img" alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <b>${item.price}</b>
    </div>
  );
};

export default Product;
