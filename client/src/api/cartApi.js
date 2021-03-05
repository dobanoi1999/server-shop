import axiosClient from './axiosClient'


const cartApi = {
    getCart: (token) => {
        return axiosClient.get("/api/cart", {
            headers: {
                "Authorization": token
            }
        })
    },
    addToCart: (product) => {
        return axiosClient.post('/api/cart', { product })
    },
    changeQuality: (t, id) => {
        const url = `/api/cart/${id}`

        return axiosClient.post(url, { action: t })

    },
    deleteCart: (id) => {
        const url = `/api/cart/${id}`
        return axiosClient.put(url)
    },
    remove: () => {
        const url = '/api/cart'
        return axiosClient.put(url)
    }
}
export default cartApi