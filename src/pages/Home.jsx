import React, { useEffect } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { api } from "../api/axios.api";
import { useState } from "react";
import "../styles/Home.css";
import Product from "../components/Product";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/products");
      setItems(response.data.products);
      console.log(response.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <div className="products">
        {items?.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
