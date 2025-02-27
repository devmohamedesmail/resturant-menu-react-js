import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNavbar() {
    return (
        <div className='fixed bottom-0 bg-white  w-full px-5 '>
            <div className='flex justify-between items-center'>
                <Link to='#' className='flex flex-col justify-center items-center flex-1'>
                    <p>🔥</p>
                    <p className='text-sm'>Offers</p>
                </Link>

                <Link to='#' className='flex flex-col justify-center items-center bg-black rounded-full p-2 flex-2'>
                    <img src="/images/home.svg" className='w-10 h-10' alt="" />
                    <p className='text-sm text-white'>Home</p>
                </Link>

                <Link to='#' className='flex flex-col justify-center items-center flex-1'>
                    <img src="/images/cart.svg" className='w-10 h-10' alt="" />
                    <p className='text-sm'>Cart</p>
                </Link>
              
            </div>
        </div>
    )
}
