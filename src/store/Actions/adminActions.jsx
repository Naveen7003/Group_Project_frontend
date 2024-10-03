import { saveAdmin } from "../Reducers/adminReducer";
import axios from '../../utils/axios'


export const currentAdmin = (token) => async (dispatch, getState) => {
    try {
        const Admin = await axios.post("/admin/current", token)
        dispatch(saveAdmin());
        console.log(Admin)
    } catch (error) {
        console.log("current Admin not working")
    }
};


export const adminSignin = (user) => async (dispatch, getState) => {
    try {
       const response=  await axios.post("/admin/signup", user);
       console.log(response);
        dispatch(currentAdmin()); // Pass token and id to currentAdmin after signup
    } catch (error) {
        console.log("Error in signin");
    }
};


