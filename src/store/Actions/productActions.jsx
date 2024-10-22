import axios from "../../utils/axios"
import { saveProduct } from "../Reducers/productReducer"

export const getProducts = () => async(dispatch, getState) => {
    try{
        const allProducts = await axios.get("/admin/all-clothes")
        console.log(allProducts)
        dispatch(saveProduct(allProducts.data.createdOrders))
        console.log("o guru thoko taali")
    }catch(err){
        console.log("lag gye 🥲🥲");
    }
}