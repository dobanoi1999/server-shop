import cartApi from "api/cartApi";
import { Button } from "globalCss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCart, deleteCart, increaseCart } from "redux/action/cart";
import {
    BtnDelete,
    CartItems,
    Count,
    DecreaseBtn,
    Image,
    IncreaseBtn,
    NumberItem,
    Price,
    Title,
} from "./CartItem.element";
const CartItem = ({ card, index }) => {
    const dispatch = useDispatch();
    const { product, quantity } = card;

    const [loading, setLoading] = useState(false);
    const dis = quantity === 1 ? true : false;
    const handleChangeQuality = (t) => {
        setLoading(true);
        cartApi
            .changeQuality(t, product._id)
            .then((res) => {
                if (t === "increase") {
                    dispatch(increaseCart(index));
                } else {
                    dispatch(decreaseCart(index));
                }
                setLoading(false);
            })
            .catch((err) => setLoading(false));
    };
    const handleDelete = () => {
        setLoading(true);
        cartApi
            .deleteCart(product._id)
            .then((res) => {

                dispatch(deleteCart(index));
                setLoading(false);
            })
            .catch((err) => setLoading(false));
    };
    return (
        <CartItems>
            <Image>
                <img src={product.image.url} />
                <p>{product.title}</p>
            </Image>
            <Price>
                <p>${product.price.format()}</p>
                <NumberItem>
                    <IncreaseBtn
                        type="button"
                        disabled={dis || loading}
                        onClick={() => handleChangeQuality("decrease")}
                    >
                        -
                    </IncreaseBtn>
                    <Count>{quantity}</Count>
                    <DecreaseBtn
                        type="button"
                        disabled={loading}
                        onClick={() => handleChangeQuality("increase")}
                    >
                        +
                    </DecreaseBtn>
                </NumberItem>
            </Price>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <Button disabled={loading} bgColor="cancel" onClick={handleDelete}>
                    Delete
                </Button>
            </div>
        </CartItems>
    );
};

export default CartItem;
