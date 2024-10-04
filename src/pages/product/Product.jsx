import { useEffect, useState } from "react";
import ProductView from "./ProductView.jsx";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState();

  const ambilProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    setProduct(data);
  };

  useEffect(() => {
    ambilProduct();
  }, []);

  return <ProductView data={product} />;
};

export default Product;
