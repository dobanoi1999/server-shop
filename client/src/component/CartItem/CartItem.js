import cartApi from 'api/cartApi'
import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCart, deleteCart, increaseCart } from 'redux/action/cart'
import {
    BtnDelete, CartItems,
    Count, DecreaseBtn, Image,
    IncreaseBtn, NumberItem, Price, Title
} from './CartItem.element'
const CartItem = ({ card, index }) => {
    const dispatch = useDispatch()
    const { product, quantity } = card
    const dis = quantity === 1 ? true : false
    const handleChangeQuality = (t) => {
        cartApi.changeQuality(t, product._id)
            .then(res => {

                if (t === "increase") {
                    dispatch(increaseCart(index))
                } else {

                    dispatch(decreaseCart(index))
                }
            })
            .catch(err => console.log(err))


    }
    const handleDelete = () => {
        cartApi.deleteCart(product._id)
            .then(res => {
                console.log(res)
                dispatch(deleteCart(index))
            })
            .catch(err => console.log(err))
    }
    return (
        <CartItems>
            <td><Image src={product.image.url} /></td>
            <td>            <Title>{product.title}</Title></td>
            <td><Price>{product.price.format()}</Price></td>
            <td><NumberItem>
                <IncreaseBtn
                    type="button"
                    disabled={dis}
                    onClick={() => handleChangeQuality("decrease")}
                >
                    -
                     </IncreaseBtn>
                <Count>{quantity}</Count>
                <DecreaseBtn type="button"
                    onClick={() => handleChangeQuality("increase")}
                >
                    +
                     </DecreaseBtn>
            </NumberItem></td>
            <td><BtnDelete onClick={handleDelete} >Delete</BtnDelete></td>
        </CartItems>
    )
}

export default CartItem
