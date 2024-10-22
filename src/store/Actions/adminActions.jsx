import { saveAdmin } from "../Reducers/adminReducer";
import axios from '../../utils/axios'


export const currentAdmin = () => async (dispatch, getState) => {
    try {
        const Admin = await axios.post("/admin/current")
        dispatch(saveAdmin(Admin));
    } catch (error) {
        console.log("current Admin not working")
    }
};

export const adminSignin = (user) => async (dispatch, getState) => {
    try {
       const response=  await axios.post("/admin/signin", user);
       console.log(response);
        dispatch(currentAdmin()); // Pass token and id to currentAdmin after signup
    } catch (error) {
        console.log("Error in signin");
    }
};

export const createCloth = (cloth) => async (dispatch, getState) => {
    try {
        await axios.post("/admin/create-cloth", cloth);
        console.log('bindaaaas');
    } catch (error) {
        console.log("error")
    }
}


