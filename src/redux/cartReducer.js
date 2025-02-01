import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  meals: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      const existingItem = state.meals.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Increase quantity if item exists
      } else {
        state.meals.push(action.payload); // Add new item to cart
      }
    }
  
  },
})


export const { add_to_cart } = cartSlice.actions

export default cartSlice.reducer