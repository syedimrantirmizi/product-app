import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import axios from "axios";
import Filter from "../../components/Filter";
import LoadingScreen from "../LoadingScreen";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const [productData, setProductdata] = useState(null);
  const [filterApi, setFilterApi] = useState(
    "https://fakestoreapi.com/products"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState(null);
  const [name, setName] = useState(null);

  const chooseFilter = (filterApi) => {
    setFilterApi(filterApi);
  };
  const getInputValue = (inputValue) => {
    setInputValue(inputValue);
  };
  const fetchData = async () => {
    if (localStorage.getItem("uid")) {
      const uid = localStorage.getItem("uid");
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      setName(docSnap.data().name);
    }
    try {
      const response = await axios.get(filterApi);
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      console.log(response);
      setProductdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [filterApi, setInputValue]);
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="md:dark:bg-gray-900 h-full min-h-screen">
        <div className="md:dark:bg-gray-900">
          <Navbar name={name} />
          <div className="grid grid-cols-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center gap-2">
            <Filter
              chooseFilter={chooseFilter}
              className="grid"
              getInputValue={getInputValue}
            />
            <div className="grid grid-cols-4 col-span-7 max-sm: gap-10 p-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3">
              {productData?.map((value, index) => {
                if (!inputValue) {
                  return (
                    <Card
                      key={value.id}
                      id={value.id}
                      desc={value.description}
                      img={value.image}
                      price={value.price}
                      title={value.title}
                    />
                  );
                } else {
                  const lowerCaseTitle = value.title.toLowerCase();

                  if (lowerCaseTitle.includes(inputValue)) {
                    return (
                      <Card
                        key={value.id}
                        id={value.id}
                        desc={value.description}
                        img={value.image}
                        price={value.price}
                        title={value.title}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
