import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';

export default function Cart() {
    const cart = useSelector(state => state.cart.meals)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className='fixed bottom-0 bg-gray-100 w-full h-18'>
            <div className='flex justify-between items-center h-18 flex-wrap px-10'>
                <div className='bg-red-600 text-white py-1 px-3 rounded-xl'> {totalPrice} Total</div>
                
                <button className='relative'>
                  <GiShoppingCart size={30} />
                  <span className='absolute -top-3 -right-3 bg-red-600 w-5 h-5  flex justify-center items-center text-xs  rounded-full text-white'>{cart.length}</span>
                </button>
            </div>
        </div>
    )
}
