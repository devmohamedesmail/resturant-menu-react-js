import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

export default function CustomButton({title,onClick}) {
  return (
    <button className='bg-yellow-600 w-full flex items-center justify-center p-2 rounded-md py-4' onClick={onClick}>
        <p className='text-white mx-1 text-sm'>{title}</p>
    </button>
  )
}
