
const productReducer = (state = {
    loading: false,
    err: "",
    data: []
}, action) => {

    switch (action.type) {
        case "FETCH_PRODUCT_LIST":

            return {
                ...state,
                loading: true
            }
        case "FETCH_PRODUCT_LIST_SUCCESS":
            return {
                data: [...action.payload],
                loading: false,
                err: "",
            }
        case "FETCH_PRODUCT_LIST_FAIL":

            return {
                ...state,
                err: action.payload || "Load failed",
                loading: false
            }
        case "ADD_PRODUCT":

            return {
                ...state,
                data: [...state.data.push(action.payload)]
            }

        case "REMOVE_PRODUCT":

            return {
                state,
                data: [...state.data.splice(action.payload, 1)]
            }

        case "UPDATE_PRODUCT":
            const { title, price, image, description, _id, category } = action.payload.product
            const data = [...state.data]
            data[action.payload.index] = {
                title,
                price,
                image,
                description,
                _id,
                category
            }
            return {
                ...state,
                data
            }

        default:
            return state

    }
}

export default productReducer