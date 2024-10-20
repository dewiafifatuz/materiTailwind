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
<div className="min-h-screen bg-gradient-to-r bg-cyan-200 dark:bg-slate-500 py-24 flex justify-center items-center">
      <img src={product?.flag} alt={product?.name}/>
      <h1 className="text-5xl font-boldtext-center pt-8 font-bold text-black dark:text-white mb-2">{product?.name}</h1>
      <p className="text-md text-gray-700 text-justify mx-24 dark:text-gray-300">{product?.currency}</p>
    </div>
  );
};

export default Rincian;
