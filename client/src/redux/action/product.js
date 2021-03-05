export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
export const removeProduct = (index) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: index
    }
}
export const updateProduct = (product, index) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: { product, index }
    }
}
export const fetchProductList = (products) => {
    return {
        type: "FETCH_PRODUCT_LIST",
        payload: products
    }
}