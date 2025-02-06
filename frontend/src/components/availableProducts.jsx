import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AvailableProducts = ({ data }) => {
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC]'>
        
        <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((item)=>(
        <Link to={`/getproduct/${item._id}`} id={item._id} className='container mx-auto p-4'> 
            <div className=" rounded-lg shadow-md overflow-hidden text-center">
            <img src={item.images[0]} alt="Bead Chain" className="w-full h-50 border:none rounded-4xl object-cover" />
            <div className="p-4">
            <h3 className="font-bold text-2xl">{item.productName}</h3>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer">₹ {item.price}</button>
      </div>
    
                </div>
            </Link>
        ))}
        </div>
    </div>
    </div>
  )
}

export default AvailableProducts