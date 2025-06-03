import { createSlice } from "@reduxjs/toolkit";
import Products from "../compoenents/Products";

const initialState = {
  items: [],
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState, // 🔧 Correct spelling here
  reducers: {
    addItems: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (index !== -1) {
        state.items[index].cartQuantity += action.payload.quantity ?? 1;
      } else {
        state.items.push({
          ...action.payload,
          cartQuantity: action.payload.quantity ?? 1,
        });
      }

      state.itemsCount += action.payload.quantity ?? 1;
    },
    deleteFromCart: (state, action) =>{
        console.log(action);
        state.items = state.items.filter((item) => item.name !== action.payload);
    }
  },
});

export const { addItems, deleteFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
