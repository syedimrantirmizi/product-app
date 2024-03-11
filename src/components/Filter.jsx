import React, { useState } from "react";

const Filter = ({ chooseFilter, getInputValue }) => {
  const [inputValue, setInputValue] = useState("");
  const search = (e) => {
    e.preventDefault();
    getInputValue(inputValue);
    setInputValue("");
  };

  return (
    <aside className="max-sm:flex">
      <div className="p-4 mx-auto mt-24 max-md:flex max-md:gap-5 max-sm:flex-col">
        <details className="mb-2">
          <summary className="bg-gray-200 md:dark:bg-gray-700 p-4 rounded-lg  max-xl:w-[110px] max-md:w-[200px] cursor-pointer shadow-md mb-4 select-none">
            <span className="font-semibold">Category</span>
          </summary>
          <ul className="">
            <li>
              <div className=" p-4">
                <p
                  onClick={() => {
                    chooseFilter("https://fakestoreapi.com/products");
                  }}
                  className="text-gray-800 md:dark:text-gray-300 md:dark:hover:text-black cursor-pointer select-none hover:bg-gray-300 p-2 transition duration-300 rounded-lg"
                >
                  No Filters
                </p>
              </div>
            </li>
            <li>
              <div className=" p-4">
                <p
                  onClick={() => {
                    chooseFilter(
                      "https://fakestoreapi.com/products/category/electronics"
                    );
                  }}
                  className="text-gray-800 md:dark:text-gray-300 md:dark:hover:text-black cursor-pointer select-none hover:bg-gray-300 p-2 transition duration-300 rounded-lg"
                >
                  Electronics
                </p>
              </div>
            </li>
            <li>
              <div className=" p-4">
                <p
                  onClick={() => {
                    chooseFilter(
                      `https://fakestoreapi.com/products/category/men's clothing`
                    );
                  }}
                  className="text-gray-800 md:dark:text-gray-300 md:dark:hover:text-black cursor-pointer select-none hover:bg-gray-300 p-2 transition duration-300 rounded-lg"
                >
                  Men's clothing
                </p>
              </div>
            </li>
            <li>
              <div className=" p-4">
                <p
                  onClick={() => {
                    chooseFilter(
                      `https://fakestoreapi.com/products/category/jewelery`
                    );
                  }}
                  className="text-gray-800 md:dark:text-gray-300 md:dark:hover:text-black cursor-pointer select-none hover:bg-gray-300 p-2 transition duration-300 rounded-lg"
                >
                  Jewellery
                </p>
              </div>
            </li>
            <li>
              <div className=" p-4">
                <p
                  onClick={() => {
                    chooseFilter(
                      `https://fakestoreapi.com/products/category/women's clothing`
                    );
                  }}
                  className="text-gray-800 md:dark:text-gray-300 md:dark:hover:text-black cursor-pointer select-none hover:bg-gray-300 p-2 transition duration-300 rounded-lg"
                >
                  Women's clothing
                </p>
              </div>
            </li>
          </ul>
        </details>
        <div
          className="max-xl:w-[110px] max-md:w-[200px] h-5 bg-white rounded-md shadow-lg z-10"
          onSubmit={search}
        >
          <form className="flex items-center justify-center p-2 gap-2 md:dark:bg-gray-900 flex-col">
            <input
              type="text"
              placeholder="Search here"
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              value={inputValue}
              className="w-full rounded-md  px-2 py-1 focus:outline-none md:dark:bg-gray-900 md:dark:text-white "
            />
            <button
              onClick={() => {
                search;
              }}
              className="flex justify-end items-center select-none cursor-pointer text-blue-500  underline"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
