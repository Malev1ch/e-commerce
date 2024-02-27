import React from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios.api";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState();
  React.useEffect(() => {
    const fetchProductById = async () => {
      const response = await api.get(`/product/${id}`);
      setProduct(response.data);
    };
    fetchProductById();
  }, []);

  return (
    <div>
      <div className="product-desc">
        <img src={product?.thumbnail} className="main-img" alt="" />
        <div className="screenshots">
          {product?.images?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
        <h2>
          <b>Title</b>: {product?.title}
        </h2>
        <p>
          <b>Category</b>: {product?.category}
        </p>
        <b>Price: ${product?.price}</b>
        <p>
          <b>Description:</b> {product?.description}
        </p>
        <p>
          <b>Rating</b>: {product?.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
