import axios from "axios"

const instance = axios.create({
    baseURL: "https://group-project-tbwn.onrender.com",
    withCredentials:true,
})

export default instance;