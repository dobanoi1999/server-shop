import axiosClient from './axiosClient'
const userId = localStorage.getItem("userid") || ""
const authApi = {
    login: (data) => {
        const url = '/api/user/login'
        return axiosClient.post(url, data)
    },
    register: (data) => {
        const url = '/api/user/register'
        return axiosClient.post(url, data)
    },
    getInfor: () => {
        const url = `/api/user/${userId}`
        return axiosClient.get(url)
    },
    verify: () => {
        const url = `/api/user/verify`
        return axiosClient.get(url)
    }
}
export default authApi