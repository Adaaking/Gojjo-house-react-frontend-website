import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/authSlice";
import homeSlice from "../homes/homeSlice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        homeReducer: homeSlice.reducer
    }
})

export default store