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
export const fetchProductList = () => {
    return {
        type: "FETCH_PRODUCT_LIST",

    }
}
export const fetchProductListSuccess = (products) => {
    return {
        type: "FETCH_PRODUCT_LIST_SUCCESS",
        payload: products
    }
}
export const fetchProductListFail = (err) => {
    return {
        type: "FETCH_PRODUCT_LIST_FAIL",
        err
    }
}