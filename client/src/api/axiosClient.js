import axios from "axios"
import queryString from 'query-string'
//"https://e-commerce-dbn.herokuapp.com"
const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
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

