
export const getCart = (cart) => {
    return {
        type: "GET_CART",
        payload: cart
    }
}
export const addProductToCart = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
export const increaseCart = (index) => {
    return {
        type: "INCREASE",
        payload: index
    }
}
export const decreaseCart = (index) => {
    return {
        type: "DECREASE",
        payload: index
    }
}
export const deleteCart = (index) => {
    return {
        type: "DELETE",
        payload: index
    }
}