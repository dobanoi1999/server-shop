import { combineReducers } from "redux";
import productReducer from './product'
import authReducer from './auth'
import categoryReducer from "./category";
import cartReducer from "./cart";
import orderReducer from "./order";
import modalReducer from "./modal";
const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    category: categoryReducer,
    orders: orderReducer,
    modal: modalReducer
})
export default rootReducer