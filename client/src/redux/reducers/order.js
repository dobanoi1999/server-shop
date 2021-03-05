
const orderReducer = (orders = [], action) => {
    switch (action.type) {
        case "FETCH_ORDER":
            return action.payload
        case "ADD_ORDER":
            orders.push(action.payload)
            return [...orders]
        case "CANCEL_ORDER":
            orders[action.payload].status = "canceled"
            return [...orders]
        default:
            return orders
    }
}
export default orderReducer