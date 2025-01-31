import React, { useEffect, useState } from 'react'
import Carousel from '../components/carousel';
import Categories from "../components/categories";
import AvailableProducts from "../components/availableProducts";
import { axiosInstance } from "../utils/axios";
const HomePage = () => {
  
  const [products, setProducts] = useState([])
  useEffect(()=>{
       getProducts()   
      },[])
    const fetchProductsByCategory = async (category)=>{
      const response =  await axiosInstance.get(`/products/category/${category}`)
      console.log(response.data)
      setProducts(response.data)
    }
    async function getProducts(){
      const response = await axiosInstance.get("/products/allproducts")
      setProducts(response.data)
     console.log(products)
}
  return (
<div className='bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC] text-'>
    {/* carousel */}
    {/* <div>
        <Carousel></Carousel>
    </div> */}
        {/* categories */}
      <h2 className='text-center font-bold text-lg underline p-4 '>Shop Original Artworks</h2>
            <Categories onCategoryClick= {fetchProductsByCategory}></Categories>
       
        {/* available products */}
        <div>
          <AvailableProducts data={products}></AvailableProducts>
        </div>
    </div>
  )
}

export default HomePage