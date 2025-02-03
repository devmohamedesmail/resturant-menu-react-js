import React from 'react'
import Category from '../components/Categories/Category'
import Meal from '../components/Meals/Meal'
import Cart from '../components/cart/Cart'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'



export default function Home() {
const cart = useSelector(state => state.cart.meals)

  return (
    <div>
        <Header />
        <Category />
        <Meal />
        <Cart />
    </div>
  )
}
