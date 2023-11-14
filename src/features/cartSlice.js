import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.cartData.some(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updateCartdata = state.cartData.map((item) =>
          item.id === action.payload.id ? (item.qty += 1) : item
        );
        localStorage.setItem("cart", JSON.stringify(updateCartdata));
      } else {
        state.cartData.push({ ...action.payload, qty: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    increment: (state, action) => {
      state.cartData = state.cartData.filter((item) =>
        item.id === action.payload ? (item.qty += 1) : item
      );
    },
    decrement: (state, action) => {
      state.cartData = state.cartData.filter((item) =>
        item.id === action.payload ? (item.qty -= 1) : item
      );
    },
    initialized_cart: (state, action) => {
      console.log(state.cartData);
      state.cartData = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increment,
  decrement,
  initialized_cart,
} = cartSlice.actions;
export default cartSlice.reducer;
