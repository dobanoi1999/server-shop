import axiosClient from 'api/axiosClient'

const orderApi = {
    fetchOrder: () => {
        const url = '/api/order'
        return axiosClient.get(url)
    },
    createOrder: (data) => {
        const url = '/api/order'
        return axiosClient.post(url, data)
    },
    cancelOrder: (id) => {
        const url = `/api/order/${id}`
        return axiosClient.delete(url)
    },
    getOrder: (id) => {
        const url = `/api/order/${id}`
        return axiosClient.get(url)
    }

}
export default orderApi