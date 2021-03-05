export const addCategory = (category) => {
    return {
        type: "CREATE_CATEGORY",
        payload: category
    }
}
export const removeCategory = (index) => {
    return {
        type: "REMOVE_CATEGORY",
        payload: index
    }
}
export const updateCategory = (category, index) => {
    return {
        type: "UPDATE_CATEGORY",
        payload: { category, index }
    }
}
export const fetchCategory = (categorys) => {
    return {
        type: "FETCH_CATEGORY",
        payload: categorys
    }
}