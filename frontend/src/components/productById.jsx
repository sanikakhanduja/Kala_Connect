import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/axios'
import { FaShoppingCart } from 'react-icons/fa'

const ProductById = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState([])
    useEffect(()=>{
        async function getProductById(){
            const response = await axiosInstance.get(`/products/${id}`)
            console.log(response)
            setProductData(response.data)
        }
        getProductById()
    },[])
    // "product": {
    //     "_id": "679b2ee7915377696e1c3166",
    //     "seller_id": "6799e6b2bb9d5872094e5afb",
    //     "productName": "bead chain",
    //     "description": "it is a bead chain",
    //     "price": "rs. 100",
    //     "category": "jewellery",
    //     "images": [
    //         "https://res.cloudinary.com/dg881ug7n/image/upload/v1736958691/sxbugzltuwdghnpcrczn.jpg",
    //         "https://res.cloudinary.com/dg881ug7n/image/upload/v1736084234/cld-sample-3.jpg"
    //     ],
    //     "createdAt": "2025-01-30T07:48:55.921Z",
    //     "updatedAt": "2025-01-30T07:48:55.921Z",
    //     "__v": 0
    // },
    // "sellerInfo": [
    //     {
    //         "_id": "6799e6b2bb9d5872094e5afc",
    //         "userId": "6799e6b2bb9d5872094e5afb",
    //         "shopName": "devi jewellery",
    //         "bio": "I'm durga devi from asagaon village. I make handmade jewellery from beads.",
    //         "location": "asagaon",
    //         "profilePicture": "",
    //         "phone": "9876543210",
    //         "createdAt": "2025-01-29T08:28:34.121Z",
    //         "updatedAt": "2025-01-29T08:28:34.121Z",
    //         "__v": 0
    //     }
    // ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const Slides = [
        {
            id: "slide 2",
            testimonial:
              "A perfect place to buy eco-friendly and handmade items! I appreciate how this platform supports women entrepreneurs and promotes sustainability. Highly recommended!",
            name: "Rahul Mehta",
            designation: "Eco-conscious Shopper",
          },
          {
            id: "slide 3",
            testimonial:
              "I absolutely love the handmade collection here! Each product has a unique story, and the craftsmanship is exceptional. Plus, it's great to know my purchase supports local artisans.",
            name: "Priya Sharma",
            designation: "Art Lover",
          },
      ];
  return (
    <div className='bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC] '>
    <div className='flex '>
        <div className='flex w-full '>
            <img src={productData.product?.images[0]} className='w-100 h-100 p-4 border-none rounded-4xl'></img>
            <ul>
           {productData.product?.images?.map((image,index)=>(
                <li key={productData.product?.index}><img src={image} className='w-40 h-35 p-4 border-none rounded-4xl'></img></li>
            ))}
           
            </ul>
        </div>
        <div className='m-2 p-4 flex flex-col w-full'>
            <h1 className='text-4xl font-bold m-2 text-center'>{productData.product?.productName}</h1>
            <h2 className='text-xl m-2'>{productData.product?.description}</h2>
            <p className='text-3xl font-bold m-2'>₹{productData.product?.price}</p>
            <p className='text-xl m-2 font-semibold'>Category: {productData.product?.category}</p>
            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <FaShoppingCart className='size-5 m-2'></FaShoppingCart>Buy Now</button>
            </div>
           
        </div>
       
    </div>
    <div className='flex flex-col items-center justify-center m-4'>
        <h1 className='font-semibold text-2xl p-4'>Trusted by Thousands of Art Lovers Worldwide</h1>
        <p >Experience worry-free art shopping on India’s most reliable platform for heritage crafts.</p>
        <section class="bg-white dark:bg-gray-700 border:none rounded-2xl m-2 w-full p-4 flex items-center justify-center">
        {Slides.map((slide)=>(
  <div class=" max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 flex">
     <div
        className="flex transition-transform duration-500 ease-in-out m-4"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
      <figure class="max-w-screen-md mx-auto ">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
         
          <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">{slide.testimonial}</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
               <div class="pr-3 font-medium text-gray-900 dark:text-white">{slide.name}</div>
               <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{slide.designation}</div>
           </div>
           </figcaption>     
      </figure>
      </div>
  </div>
   ))}
</section>
    </div>
    </div>
  )
}

export default ProductById