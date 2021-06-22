
const cartReducer = (cart = [], action) => {
    switch (action.type) {
        case "GET_CART":
            return action.payload
        case "DELETE":
            cart.splice(action.payload, 1);
            return [...cart]
        case "DECREASE":
            cart[action.payload].quantity -= 1;
            return [...cart]
        case "INCREASE":
            cart[action.payload].quantity += 1;
            return [...cart]
        case "ADD_CART":

            cart.push(action.payload)
            return [...cart]
        default:
            return cart;
    }
}

export default cartReducer