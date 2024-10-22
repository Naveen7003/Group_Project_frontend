import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    isAuth:false
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        saveProduct: (state, action) => {
            console.log(action.payload)
            state.product = action.payload;
            state.isAuth = true;
        },
        removeProduct: (state, action) => {
            state.product = [];
            state.isAuth = false;
        }
        
    },
});

export const { saveProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;