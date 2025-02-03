import React from 'react'
import CustomQtnButton from '../../custom/CustomQtnButton'
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function CartItem({title,image,price,quantity}) {
    return (
        <div className='cart-item flex justify-start my-1 border rounded mx-2 border-gray-200 p-1'>
            <div> <img src={image} className='w-20 h-20' alt="" /></div>
            <div className='w-full'>
                <div className='mx-2'>
                    <h6>{title}</h6>
                    <h6 className='text-yellow-600 font-bold'>{price}</h6>
                </div>
                <div className='flex justify-between mt-2 w-full '>
                    <div className='bg-yellow-600 rounded flex w-fit px-3 py-1 mx-3 '>
                        <CustomQtnButton icon={<TiPlus color='white' />} />
                        <input className='w-10 text-center text-white' readOnly value={quantity} />
                        <CustomQtnButton icon={<TiMinus color='white' />} />
                    </div>
                    <button className='mx-5'>
                        <FaTrash color='red' />
                    </button>
                </div>
            </div>
        </div>
    )
}
