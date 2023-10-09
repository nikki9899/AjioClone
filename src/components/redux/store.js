import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishListSlice";

const store = configureStore({
  reducer: {
    wishlist: wishListReducer,
  },
});

export default store;
