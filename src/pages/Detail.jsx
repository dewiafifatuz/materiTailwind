import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import detailRestoReducer from "../store/reducer/detailRestoReducer";
import { detailResto } from "../store/action/detailRestoAction";

const Detail = () => {
  const product = useSelector((state) => state.detailResto.resto);
  const dispatchRedux = useDispatch();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      dispatchRedux(detailResto(response.data.restaurant));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(product);

  return (
    <div className="min-h-screen bg-gradient-to-r py-24 bg-pink-400">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            src={`https://restaurant-api.dicoding.dev/images/large/${product?.pictureId}`}
            className="w-[735px] rounded-xl"
            alt="Restaurant"
          />
        </div>
        <h1 className="text-2xl text-center pt-8 font-bold text-black dark:text-white mb-2">
          {product?.name}
        </h1>
        <h4 className="text-md text-gray-700 text-justify mx-24 dark:text-gray-300">
          {product?.description}
        </h4>
      </div>
    </div>
  );
};

export default Detail;
