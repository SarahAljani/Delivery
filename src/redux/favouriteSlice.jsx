// src/slices/favouriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: { favourites: [] },
  reducers: {
    add: (state, action) => {
      // Add product to favorites if it's not already in the list
      const product = action.payload;
      if (!state.favourites.some((fav) => fav.id === product.id)) {
        state.favourites.push(product);
      }
    },
    remove: (state, action) => {
      // Remove product from favorites by filtering it out
      const productId = action.payload;
      state.favourites = state.favourites.filter((fav) => fav.id !== productId);
    },
  },
});

export const { add, remove } = favouriteSlice.actions;

export default favouriteSlice.reducer;
