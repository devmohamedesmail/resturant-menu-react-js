import React, { useContext, useEffect } from 'react'
import Category from '../components/Categories/Category'
import Meal from '../components/Meals/Meal'
import Cart from '../components/cart/Cart'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import IDContext from '../context/DataProvider'
import Banner from '../components/Banner/Banner'

import BottomNavbar from '../components/Bottomnavbar/BottomNavbar'



export default function Home() {
  const cart = useSelector(state => state.cart.meals)
  const { id } = useParams();
  const { tableID, setTableID } = useContext(IDContext)

  useEffect((

  ) => {
    setTableID(id)
  }, [id])
  return (
    <div>
      <Header />
      <Category />
       <Banner />
      <Meal />
      {/* <Cart id={id} /> */}
      <BottomNavbar />
    </div>
  )
}
