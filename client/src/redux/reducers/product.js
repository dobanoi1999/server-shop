
const productReducer = (productList = [], action) => {

    switch (action.type) {
        case "FETCH_PRODUCT_LIST":
            const newProducList = [...action.payload]
            return newProducList
        case "ADD_PRODUCT":

            productList.push(action.payload)


            return [...productList]

        case "REMOVE_PRODUCT":
            productList.splice(action.payload, 1);
            return [...productList]

        case "UPDATE_PRODUCT":
            const { title, price, image, description, _id, category } = action.payload.product
            productList[action.payload.index] = {
                title,
                price,
                image,
                description,
                _id,
                category
            }
            return [...productList]

        default:
            return productList

    }
}

export default productReducer