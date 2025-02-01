import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

export default function CustomAddToCart({onClick}) {
  return (
    <button className='bg-red-600 rounded-full w-10 h-10 flex justify-center items-center' onClick={onClick}>
       <MdAddShoppingCart color='white' size={20} />
    </button>
  )
}
