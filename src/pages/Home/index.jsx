import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import axios from 'axios';
import Filter from '../../components/Filter';

const Home = () => {
  const [productData, setProductdata] = useState(null)
  const [filterApi, setFilterApi] = useState("https://fakestoreapi.com/products");
  const [inputValue, setInputValue] = useState(null)
  useEffect(() => {
    fetchData()
  }, [filterApi, setInputValue]);
  const chooseFilter = (filterApi) => {
    setFilterApi(filterApi);
  };
  const getInputValue = (inputValue) => {
    setInputValue(inputValue)
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(filterApi);

      setProductdata(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='md:dark:bg-gray-900 h-screen '>
        <div className='md:dark:bg-gray-900'>
          <Navbar />
          <div className='grid grid-cols-8 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center gap-2'>
            <Filter chooseFilter={chooseFilter} className="grid" getInputValue={getInputValue} />
            <div className='grid grid-cols-4 col-span-7 max-sm: gap-10 p-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3'>
              {productData?.map((value, index) => {

                if (!inputValue) {
                  return (
                    <Card key={value.id} id={value.id} desc={value.description} img={value.image} price={value.price} title={value.title} />
                  )
                } else {
                  const lowerCaseTitle = value.title.toLowerCase();

                  if (lowerCaseTitle.includes(inputValue)) {
                    return (<Card key={value.id} id={value.id} desc={value.description} img={value.image} price={value.price} title={value.title} />)
                  }
                }
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home