import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, desc, img, price, title }) => {
  const navigator = useNavigate();
  return (
    <div className="max-w-lg max-sm:max-w-[250px] hover:scale-105 hover:z-10 mx-auto  rounded-md overflow-hidden shadow-md md:dark:shadow-gray-600 md:hover:dark:shadow-gray-600 hover:shadow-lg transition-all duration-300">
      <div className="relative bg-white p-10">
        <img
          className="w-full h-[200px] object-contain"
          src={img}
          alt="Product Image"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h3 className="text-lg font-medium mb-2 md:dark:text-gray-400 line-clamp-1">
          {title}
        </h3>
        <p
          id="desc"
          className="text-gray-600 text-sm mb-4 line-clamp-3 overflow-hidden"
        >
          {desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg md:dark:text-gray-400">
            ${price}
          </span>
          <button
            onClick={() => navigator(`/products/${id}`)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
