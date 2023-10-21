import axios from "axios";

const request = axios.create({
    baseURL:"/api",
    timeout:5000
})

request.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token!=null){
        config.headers["token"] = token
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    return Promise.reject(error)
})


export default request
