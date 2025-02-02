import React from 'react'
import Category from '../components/Categories/Category'
import Meal from '../components/Meals/Meal'
import Cart from '../components/cart/Cart'
import Header from '../components/Header/Header'



export default function Home() {

  return (
    <div>
        <Header />
        <Category />
        <Meal />
        <Cart />
    </div>
  )
}
