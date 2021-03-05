import axiosClient from './axiosClient'

const productApi = {
    getAll: (params) => {
        const url = '/api/product'
        return axiosClient.get(url, { params })
    },
    create: (data) => {
        const url = `/api/product`
        return axiosClient.post(url, data)
    },
    update: (id, data) => {
        const url = `/api/product/${id}`
        return axiosClient.put(url, data)
    },
    delete: (id) => {
        const url = `/api/product/${id}`
        return axiosClient.delete(url)
    },
    deleteAll: () => {
        const url = '/api/product'
        return axiosClient.delete(url)
    }
}
export default productApi