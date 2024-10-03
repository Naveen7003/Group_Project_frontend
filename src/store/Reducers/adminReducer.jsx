import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    isAuth: false,
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        saveAdmin: (state, action) => {
            console.log(action.payload)
            state.admin = action.payload;
            state.isAuth = true;
        },
        removeAdmin: (state, action) => {
            state.admin = null;
            state.isAuth = false;
        }
        
    },
});

export const { saveAdmin, removeAdmin } = adminSlice.actions;

export default adminSlice.reducer;