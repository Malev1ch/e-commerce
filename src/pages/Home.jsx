import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { api } from "../api/axios.api";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Home.css";
import Product from "../components/Product";

const Home = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await api.get("/products");
        const categoriesResponse = await api.get("/products/categories");

        setItems(productsResponse.data.products || []);
        setCategories(categoriesResponse.data.categories || []);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    navigate(`/?category=${selectedValue}`);
  };

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <div className="categories">
        <label htmlFor="categorySelect">Filter: </label>
        <select
          id="categorySelect"
          onChange={handleCategoryChange}
          value={selectedCategory || ""}>
          <option value="">All</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
          <option value="womens-dresses">womens-dresses</option>
          <option value="motorcycle">motorcycle</option>
          <option value="automotive">automotive</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="products">
        {items
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory
          )
          .map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
