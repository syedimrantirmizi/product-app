import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const params = useParams();
  const [singleData, getSingleData] = useState(null);
  const fetchSingleData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      getSingleData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleData();
  }, []);
  return (
    <div className="md:dark:bg-gray-900 h-full min-h-screen">
      <Navbar />
      <div className="flex p-10 gap-40 justify-center items-center max-lg:flex-col">
        <div className="bg-white border-blue-500 md:dark:border-gray-400 shadow-md md:dark:hover:shadow-gray-400 hover:shadow-lg transition-all duration-500 hover:shadow-blue-500 border md:dark:border-2 p-6 rounded-lg shadow-blue-500 md:dark:shadow-gray-400">
          <img
            className="object-contain h-[650px]"
            src={singleData?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-10 justify-centger border-blue-500 h-[450px] w-[600px] max-sm:w-full md:dark:border-y-2 border-y p-10">
          <p className="font-bold text-xl md:dark:text-gray-400">
            {singleData?.title}
          </p>
          <p className="text-sm text-gray-600">{singleData?.description}</p>
          <div className="flex w-full justify-between items-end">
            <p className="font-bold text-xl md:dark:text-gray-400">
              ${singleData?.price}
            </p>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
