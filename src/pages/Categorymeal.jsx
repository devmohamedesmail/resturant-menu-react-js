import React, { useEffect, useState } from 'react'
import {  useLocation,useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MealItem from '../components/Meals/MealItem';
import Cart from '../components/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../redux/cartReducer';

export default function Categorymeal() {
    const { id } = useParams()
    const { state } = useLocation();
    console.log(state)
    const [quantities, setQuantities] = useState({});
    const [filteredMeals, setFilteredMeals] = useState([]);
    const dispatch = useDispatch();

    // Fetch all meals (reusing the query)
    const { data: meals, isLoading } = useQuery({
        queryKey: ["meals"],
        queryFn: async () => {
            const res = await axios.get(
                "https://resturant-menu.onrender.com/api/show/meals"
            );
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


    // Run filtering when either 'meals' or 'id' changes
    useEffect(() => {
        if (meals) {
            const filtered = meals.filter((meal) => meal.category_id === id);
            setFilteredMeals(filtered);
        }
    }, [id, meals]); // Dependency array includes both 'id' and 'meals'

    if (isLoading) return <p>Loading...</p>;

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
        <div>

            <h1 className="text-center font-bold text-red-600 mb-10">Filtered Meals</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {filteredMeals.length > 0 ? (
                    filteredMeals.map((item) => (
                        <MealItem
                            key={item._id}
                            title={item.title}
                            price={item.price}
                            quantity={quantities[item._id] || 1}
                            increament={() => handleIncrement(item._id)}
                            decreament={() => handleDecrement(item._id)}
                            addtocart={() => handleAddToCart(item)}
                            image={`https://resturant-menu.onrender.com/uploads/${item.image}`} />
                    ))
                ) : (
                    <p className="text-center col-span-4">No meals found for this category.</p>
                )}
            </div>
            <Cart />
        </div>
    )
}
