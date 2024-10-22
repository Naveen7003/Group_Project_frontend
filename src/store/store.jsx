import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Reducers/adminReducer";
import productReducer from "./Reducers/productReducer";

export const store = configureStore({
    reducer: {
        adminReducer,
        product:productReducer,
    },
});
