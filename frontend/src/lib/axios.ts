import axios from "axios";



// export const axiosInstance  = axios.create({
//     baseURL : import.meta.env.DEV ? "http://localhost:3000/v1" : "/v1",
//     withCredentials:true
// });



export const axiosInstance  = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials:true
});