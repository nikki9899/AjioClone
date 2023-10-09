import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
  totalQuantity: 0,
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
      state.totalQuantity++;
      localStorage.setItem("wishlistdata",JSON.stringify(state));
    },
    removeFromWishlist: (state, action) => {
      // console.log(state);
      // console.log(action.payload)
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.productType !== action.payload

      );
       
      state.totalQuantity--;
      
      localStorage.setItem("wishlistdata",JSON.stringify(state));
    },
  },
});


export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
