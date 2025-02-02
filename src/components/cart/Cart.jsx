import React, { Fragment, useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import CustomQtnButton from '../../custom/CustomQtnButton';
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import CustomButton from '../../custom/CustomButton';

export default function Cart() {
    const cart = useSelector(state => state.cart.meals)
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const [openmenu, setOpenMenu] = useState(false)
    return (
        <Fragment>
            <div className='fixed bottom-0 bg-gray-100 w-full h-18'>
                <div className='flex justify-between items-center h-18 flex-wrap px-10'>
                    <div className='bg-red-600 text-white py-1 px-3 rounded'> {totalPrice} : Total</div>

                    <button className='relative' onClick={() => setOpenMenu(prev => !prev)}>
                        <GiShoppingCart size={30} />
                        <span className='absolute -top-3 -right-3 bg-red-600 w-5 h-5  flex justify-center items-center text-xs  rounded-full text-white'>{cart.length}</span>
                    </button>
                </div>
            </div>


            <div className={`fixed bg-white transition-transform duration-1000 bottom-0 h-full size-100 py-10 ${openmenu ? '' : 'translate-full'}`}>
                <div className='flex justify-end px-10'>
                    <button className='bg-red-600 p-2' onClick={() => setOpenMenu(prev => !prev)}><IoMdClose color='white' /></button>
                </div>
                <h1 className='text-center font-bold text-red-600'>Cart Content</h1>


                {cart && cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartItem key={item.id} title={item.title} price={item.price} image={item.image}  />
                    ))
                ) : (
                    <div>No items in cart</div>
                )}




                <div className='px-10 mt-10'>
                    <CustomButton title='Send Order' />
                </div>




            </div>
        </Fragment>
    )
}
