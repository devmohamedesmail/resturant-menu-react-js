import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

export default function CustomButton() {
  return (
    <button className='bg-red-600 w-full flex items-center justify-center p-2 rounded-md'>
        <MdAddShoppingCart color='white' />
        <p className='text-white mx-1 text-sm'>Add To Order</p>
    </button>
  )
}
