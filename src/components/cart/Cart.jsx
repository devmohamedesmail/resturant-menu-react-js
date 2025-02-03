import React, { Fragment, useContext, useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import CustomButton from '../../custom/CustomButton';
import axios from 'axios';
import { config } from '../../config/config';
import { decrease_quantity, increase_quantity, remove_from_cart } from '../../redux/cartReducer';
import IDContext from '../../context/DataProvider';
import CustomSpinner from '../../custom/CustomSpinner';

export default function Cart({ id }) {
    const cart = useSelector(state => state.cart.meals)
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const [openmenu, setOpenMenu] = useState(false)
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch();
    const { tableID, setTableID } = useContext(IDContext);




    const handleSendOrder = async () => {
        setloading(true)
        try {
            await axios.post(`${config.url}/api/add/order`, {
                table: tableID,
                order: cart,
            })
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }



    const handleDeleteItem = (id) => {
        dispatch(remove_from_cart(id));
    };

    const handleIncrement = (id) =>{
        dispatch(increase_quantity(id))
    }
    const handleDecrement = (id) =>{
        dispatch(decrease_quantity(id))
    }


    return (
        <Fragment>
            <div className='fixed bottom-0 bg-black border-t border-white w-full h-18'>
                <div className='flex justify-between items-center h-18 flex-wrap px-10'>
                    <div className='bg-yellow-600 text-white py-1 px-3 rounded'> {totalPrice} : Total</div>

                    <button className='relative' onClick={() => setOpenMenu(prev => !prev)}>
                        <GiShoppingCart size={30} color='white' />
                        <span className='absolute -top-3 -right-3 bg-yellow-600 w-5 h-5  flex justify-center items-center text-xs  rounded-full text-white'>{cart.length}</span>
                    </button>
                </div>
            </div>


            <div className={`fixed bg-white transition-transform duration-1000 bottom-0 h-full size-100 py-10 ${openmenu ? '' : 'translate-full'}`}>
                <div className='flex justify-end px-10'>
                    <button className='bg-yellow-600 p-2' onClick={() => setOpenMenu(prev => !prev)}><IoMdClose color='white' /></button>
                </div>
                <h1 className='text-center font-bold text-red-600'>Cart Content</h1>




                {cart && cart.length > 0 ?
                    <>
                        <div>
                            {cart.map((item, index) => (
                                <CartItem 
                                  key={item.id} 
                                  title={item.title} 
                                  price={item.price} 
                                  image={item.image} 
                                  quantity={item.quantity} 
                                  deleteitem={() => handleDeleteItem(item.id)}
                                  increaseQuantity={() => handleIncrement(item.id)}
                                  decreaseQuantity={() => handleDecrement(item.id)}
                                   />
                            ))}
                        </div>


                        <div className='px-10 mt-10'>

                            {loading ? <CustomSpinner /> : <CustomButton title='Send Order' onClick={() => handleSendOrder()} />}
                        </div>


                    </>
                    : <>

                        <h1 className='text-center mt-20'>Your Cart is Empty</h1>

                    </>}

            </div>
        </Fragment>
    )
}
