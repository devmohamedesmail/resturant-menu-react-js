import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MealItem from '../components/Meals/MealItem';
import Cart from '../components/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../redux/cartReducer';
import { config } from '../config/config';
import { IoMdArrowBack } from "react-icons/io";
import IDContext from '../context/DataProvider';

export default function Categorymeal() {
    const { id, title } = useParams()
    const [quantities, setQuantities] = useState({});
    const [filteredMeals, setFilteredMeals] = useState([]);
    const dispatch = useDispatch();
    const navigation  = useNavigate()
    const {tableID,setTableID} = useContext(IDContext)
    console.log(tableID)

    // Fetch all meals (reusing the query)
    const { data: meals, isLoading } = useQuery({
        queryKey: ["meals"],
        queryFn: async () => {
            const res = await axios.get(
                `${config.url}/api/show/meals`
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
            image: `${config.url}/uploads/${item.image}`
        }));
    };



    return (
        <Fragment>
            <div className='container m-auto py-5 px-5'>
                <button className='bg-yellow-600 p-2 rounded-full' onClick={()=>navigation(-1)}>
                    <IoMdArrowBack color='white' />
                </button>
            </div>
            <div className='container m-auto px-2 mb-20'>

                <h1 className="text-center font-bold text-yellow-600 mb-10 text-2xl">{title}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
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
        </Fragment>
    )
}
