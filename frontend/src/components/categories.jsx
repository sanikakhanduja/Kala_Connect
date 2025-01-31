import React from 'react'

const Categories = ({ onCategoryClick }) => {
    const categories = [
        {
            name:"Handicrafts"
        },
        {
            name:"Clothing"
        },
        {
            name: "Home Decor"
        },
        {
            name:"Accessories"
        },{
            name:"Gifts"
        },{
            name:"Jewellery"
        },
        {
            name:"Toys"
        },{
            name:"Utensils"
        }]
    
    return <div className=''>
        <div className="flex flex-wrap justify-center gap-4 p-4 w-full">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-[#7e4f4a] text-white hover:cursor-pointer flex text-center items-center p-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={()=>onCategoryClick(category.name.toLowerCase())}>
          
          <p className="text-lg font-medium w-full">
           {category.name}
            </p>
        </div>
      ))}
    </div>
    </div>
 
}

export default Categories