const { default: axiosClient } = require("./axiosClient")

const historyApi = {
    getAll: () => {
        const url = '/api/history'
        return axiosClient.get(url)
    },
    get: (id) => {
        const url = `/api/history/${id}`
        return axiosClient.get(url)
    },
    changeStatus: (id, status) => {
        const url = `/api/history/${id}`
        return axiosClient.post(url, { status })
    }
}

export default historyApi