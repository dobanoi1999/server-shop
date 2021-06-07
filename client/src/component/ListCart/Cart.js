import CartItem from 'component/CartItem/CartItem'
import { Button } from 'globalCss'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BtnCheckOut, CheckOutContainer, ListCart, Total, Table } from './Cart.element'
const Cart = () => {
    const history = useHistory()
    const card = useSelector(state => state.cart)

    let total = 0;
    for (const i of card) {
        total += i.product.price * i.quantity
    }
    if (!card || card?.length === 0) return <p style={{ fontSize: "2rem", textAlign: "center" }}>
        There are no items in this cart</p>
    return (
        <ListCart>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {card.map((i, index) => {
                        return <CartItem key={i.product._id} index={index} card={i} />

                    })}
                </tbody>
            </Table>
            <CheckOutContainer>
                <Total>Total ({card.length} item) :  ${total.format()}</Total>
                <Button bgColor="primary" onClick={() => history.push('/checkout')} >check out</Button>
            </CheckOutContainer>
        </ListCart>
    )
}

export default Cart
