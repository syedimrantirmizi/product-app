import React from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen h-full md:dark:bg-gray-900 flex justify-center items-center flex-col gap-10">
      <p
        className="flex items-center space-x-6 rtl:space-x- cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        <img src="/TheHouse.jpg" className="h-14" alt="TheHouse Logo" />
        <span className="text-6xl font-semibold whitespace-nowrap md:dark:text-white">
          TheHouse
        </span>
      </p>
      <div
        className="animate-spin inline-block size-40 border-[15px] border-current border-t-transparent text-blue-500 rounded-full md:dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
