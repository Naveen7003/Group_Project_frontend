import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Reducers/adminReducer";

export const store = configureStore({
    reducer: {
        adminReducer,
        
    },
});