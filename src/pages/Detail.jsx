import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import detailRestoReducer from "../store/reducer/detailRestoReducer";

const Detail = () => {
  const product = useSelector((state) => state.detailresto.resto);
  const dispatchRedux = useDispatch();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      return response.data.restaurant;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      dispatchRedux(detailRestoReducer(data)); // pastikan action detailresto di reducer terdefinisi
    };

    getData();
  }, [dispatchRedux, id]);

  console.log(product);

  return (
    <div className="min-h-screen bg-gradient-to-r bg-pink-400">
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${product?.pictureId}`} 
        alt="Restaurant"
      />
      <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
        {product?.name}
      </h1>
      <h4 className="text-md text-gray-700 dark:text-gray-300">
        {product?.description}
      </h4>
    </div>
  );
};

export default Detail;
