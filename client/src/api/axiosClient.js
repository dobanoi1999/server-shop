import axios from "axios"
import queryString from 'query-string'
const baseURL = process.env.NODE_ENV === "production" ? "https://e-commerce-dbn.herokuapp.com" : "http://localhost:8080"
const axiosClient = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json',
        'Authorization': localStorage.getItem("token")
    },
    paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.response.use(response => {


    if (response && response.data) return response.data
}, err => {
    if (err?.response?.status === 401) {
        localStorage.clear()
        console.log(err)
    }

    return err.response
})

export default axiosClient

