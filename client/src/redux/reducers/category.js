
const categoryReducer = (categorys = [], action) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return categorys = action.payload
        case "CREATE_CATEGORY":
            categorys.push(action.payload)
            return [...categorys]

        case "UPDATE_CATEGORY":

            categorys[action.payload.index] = {
                ...categorys[action.payload.index],
                name: action.payload.category
            }
            return [...categorys]

        case "REMOVE_CATEGORY":
            categorys.splice(action.payload, 1)
            return [...categorys]

        default:
            return categorys
    }
}

export default categoryReducer