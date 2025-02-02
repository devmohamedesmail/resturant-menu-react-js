import React from 'react'

import CustomQtnButton from '../../custom/CustomQtnButton'
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import CustomAddToCart from '../../custom/CustomAddToCart';



export default function MealItem({image,title,price,quantity,increament,decreament,addtocart}) {
  return (
    <div className='shadow-lg rounded-2xl mb-2'>
      <img src={image} alt="" className='w-full h-48 rounded-2xl' />
      <div className='p-2'>
        <h2 className='text-center'>{title}</h2>
        <h2 className='text-center text-red-700 font-bold'>{price} </h2>
      </div>
      <div className='p-2 flex items-center justify-between'>
        <div className='bg-red-600 flex justify-between py-1 px-2 rounded-2xl'>
          <CustomQtnButton icon={<GoPlus color='white' />} onClick={increament} />
          <input type="text" readOnly className='w-10 text-center text-white ' value={quantity} />
          <CustomQtnButton  icon={<TiMinus color='white' />} onClick={decreament} />
        </div> 
        
       <CustomAddToCart onClick={addtocart} />
      </div>
    </div>
  )
}
