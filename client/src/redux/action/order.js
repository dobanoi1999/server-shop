export const fetchOrder = (orders) => {
    return {
        type: "FETCH_ORDER",
        payload: orders
    }
}
export const cancelOrder = (index) => {
    return {
        type: "CANCEL_ORDER",
        payload: index
    }
}
export const addOrder = (data) => {
    return {
        type: "ADD_ORDER",
        payload: data
    }
}