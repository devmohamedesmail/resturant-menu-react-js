import React from 'react'
import Category from '../components/Categories/Category'
import Meal from '../components/Meals/Meal'
import Cart from '../components/cart/Cart'

export default function Home() {
  return (
    <div>
        <Category />
        <Meal />
        <Cart />
    </div>
  )
}
