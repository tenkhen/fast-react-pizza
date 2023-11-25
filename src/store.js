import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    // Here we connect user and userReducer. So we can access data in userSlice from everywhere by using useSelector
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
