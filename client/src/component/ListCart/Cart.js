import CartItem from 'component/CartItem/CartItem'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeShow } from 'redux/action/modal'
import { CheckOutContainer, ListCart, Table } from './Cart.element'
const Cart = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const card = useSelector(state => state.cart)


    let total = 0;
    for (const i of card) {
        total += i.product.price * i.quantity
    }
    if (!card || card?.length === 0) return <p style={{ fontSize: "2rem", textAlign: "center", color: "#ffffff" }}>
        There are no items in this cart</p>
    return (
        <ListCart >
            <Table>
                {card.map((i, index) => {
                    return <CartItem key={i.product._id} index={index} card={i} />

                })}
            </Table>
            <CheckOutContainer onClick={() => {
                dispatch(changeShow(false))
                history.push("/checkout")
            }} type="button" >
                <p  >check out </p>  <span>${total.format()}</span>
            </CheckOutContainer>
        </ListCart>
    )
}

export default Cart
