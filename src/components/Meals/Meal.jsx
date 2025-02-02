
import React, { useState } from 'react'
import MealItem from './MealItem'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../../redux/cartReducer';


export default function Meal() {
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.meals)


  const { data, isLoading } = useQuery({
    queryKey: ['meals'],
    queryFn: async () => {
      const res = await axios.get('https://resturant-menu.onrender.com/api/show/meals');
      return res.data;
    },
  });

  // Function to increase quantity of a specific meal
  const handleIncrement = (id) => {
    console.log(id)
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1, // Default to 1 if meal is not in state
    }));
  };

  // Function to decrease quantity of a specific meal
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Prevent quantity from going below 1
    }));
  };



  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    dispatch(add_to_cart({
      id: item._id,
      title: item.title,
      price: item.price,
      quantity: quantities[item._id] || 1,
      image: `https://resturant-menu.onrender.com/uploads/${item.image}`
    }));
  };

  return (
    <div className='mb-30'>
      <h1 className='text-center font-bold text-red-600 mb-10'>Our Meals</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>



        {data?.map((item) =>
          <MealItem
            key={item._id}
            title={item.title}
            price={item.price}
            quantity={quantities[item._id] || 1}
            increament={() => handleIncrement(item._id)}
            decreament={() => handleDecrement(item._id)}
            addtocart={() => handleAddToCart(item)}
            image={`https://resturant-menu.onrender.com/uploads/${item.image}`} />)}


      </div>
    </div>
  )
}
