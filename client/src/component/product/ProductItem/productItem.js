import cartApi from 'api/cartApi'
import productApi from 'api/productApi'
import Toast from 'component/shared/Toast/Toast'
import { Button } from 'globalCss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addProductToCart } from 'redux/action/cart'
import { removeProduct } from 'redux/action/product'
import { BtnDel, Desc, Image, Item, NameProduct, Price } from './productItem.element'
function ProductItem({ product, isAdmin, index }) {

    const isLogged = useSelector(state => state.auth.isLogged)
    const history = useHistory()
    const dispatch = useDispatch()
    const [sending, setSending] = useState(false)

    const { _id, title, price, image, description } = product
    const handleDetailProduct = () => {
        if (isAdmin) return
        history.push(`/product/${_id}`)
    }

    const handleDele = () => {
        setSending(true)
        if (window.confirm("Are you sure you want to delete?")) {
            productApi.delete(_id)
                .then(res => {
                    setSending(false)
                    if (res.status === 500) {
                        return Toast.warn(res.data.msg)
                    }
                    if (res.msg) {
                        Toast.success(res.msg, {
                            autoClose: 3000,
                        })
                        return dispatch(removeProduct(index))
                    }
                    return Toast.error()
                }
                )
                .catch(err => console.log(err))
        }
    }
    const handleAddProduct = () => {
        if (!isLogged) return alert("please login to add")
        setSending(true)
        cartApi.addToCart(product)
            .then(res => {
                setSending(false)
                if (res.status === 500) {
                    return Toast.warn(res.data.msg)
                }

                dispatch(addProductToCart({ product, quantity: 1 }))
                Toast.success("add success", {
                    autoClose: 2000
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Item>
                <BtnDel onClick={handleDele} hide={isAdmin ? "block" : "none"} >X</BtnDel>
                <Image src={image.url} onClick={handleDetailProduct} />
                <NameProduct>
                    {title}
                </NameProduct>
                <Desc>
                    {description}
                </Desc>
                <Price>
                    ${(+price).format()}
                </Price>
                {isAdmin ?
                    <Button
                        bgColor="primary"
                        fontBig
                        onClick={() => history.push(`/update_product/${_id}`)}
                        type="button">
                        {sending ? "Loading..." : "Update"}
                    </Button> :
                    <Button
                        bgColor="primary"
                        fontBig
                        type="button"
                        onClick={handleAddProduct} >
                        {sending ? "Loading..." : "Add To Cart"}
                    </Button>}
            </Item>

        </>
    )
}

export default ProductItem
