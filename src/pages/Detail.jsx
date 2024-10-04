import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const ambilProduct = async () => {
    const response = await axios.get(
      `https://restaurant-api.dicoding.dev/detail/${id}`
    );
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
    ambilProduct();
  }, []);

  return (
    <div>
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${product?.restaurant?.pictureId}`}
        alt=""
      />
      <h1>{product?.restaurant?.name}</h1>
      <h4>{product?.restaurant?.description}</h4>
    </div>
  );
};

export default Detail;
