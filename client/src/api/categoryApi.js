import axiosClient from './axiosClient'
const categoryApi = {
    fetchAllCategory: () => {
        const url = '/api/category'
        return axiosClient.get(url)
    },
    create: (data) => {
        const url = '/api/category'
        return axiosClient.post(url, data)
    },
    update: (id, data) => {
        const url = `/api/category/${id}`
        return axiosClient.put(url, { name: data })
    },
    delete: (id) => {
        const url = `/api/category/${id}`
        return axiosClient.delete(url)
    },
}
export default categoryApi