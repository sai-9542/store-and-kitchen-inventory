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
        state.items[index].cartQuantity = state.items[index].cartQuantity+1 ?? 1;
      } else {
        state.items.push({
          ...action.payload,
          cartQuantity: 1,
        });
      }

      state.itemsCount += action.payload.quantity ?? 1;
    },
    decreaseQty: (state, action) => {
        const item = state.items.find((item) => item.name === action.payload);
        
        if (item && item.cartQuantity > 1) {
            item.cartQuantity -= 1;
            state.itemsCount -= 1;
        } else if (item) {
            // Optional: remove the item completely if quantity is 1
            state.items = state.items.filter((item) => item.name !== action.payload);
            state.itemsCount -= 1;
        }
    },
    deleteFromCart: (state, action) =>{
        state.items = state.items.filter((item) => item.name !== action.payload);
    }
  },
});

export const { addItems, deleteFromCart, decreaseQty } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
