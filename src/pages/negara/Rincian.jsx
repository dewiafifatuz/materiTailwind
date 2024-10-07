import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Rincian = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const ambilProduct = async () => {
    const response = await axios.get(
      `https://freetestapi.com/api/v1/countries/${id}`
    );
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
    ambilProduct();
  }, [id]);

  return (
    <div className="card max-w-md mx-auto bg-pink-400 dark:bg-slate-500 shadow-lg rounded-lg overflow-hidden">
      <img src={product?.flag} alt={product?.name}/>
      <h1 className="text-5xl font-bold">{product?.name}</h1>
      <p className="py-6 max-w-[50rem] text-center">{product?.currency}</p>
    </div>
  );
};

export default Rincian;
