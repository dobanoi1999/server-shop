import cartApi from 'api/cartApi'
import orderApi from 'api/orderApi'
import data from 'assets/data.json'
import { Modal } from 'component/product/ProductItem/productItem.element'
import Toast from 'component/shared/Toast/Toast'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCart } from 'redux/action/cart'
import { addOrder } from 'redux/action/order'
import { AddressInfor, BtnAdd, CheckOutBtn, CheckOutContainer, Form, Head, ListItem, Name, Total } from './CheckOut.element'


const CheckOut = () => {
    const card = useSelector(state => state.cart)
    const history = useHistory()
    const [toggle, setToggle] = useState(false)
    const [err, setErr] = useState("")
    const dispatch = useDispatch()
    const [address, setAddress] = useState({
        name: "",
        number: "",
        province: "",
        districts: "",
        wards: ""

    })
    let districts = data[address.province]?.Districts || []

    let wart = districts[address.districts]?.Wards || []

    let total = 0;
    for (const i of card) {
        total += i.product.price * i.quantity
    }
    const verify = (arr) => {

        for (const i in arr) {
            if (arr[i] === "") {
                setErr("Please fill all input")
                return false
            }
        }
        if (isNaN(arr.number) || arr.number.length !== 10) {
            setErr("Phone number must have 10 digits")
            return false
        }


        return true

    }
    const handleOnChange = e => {
        const { name, value } = e.target
        setErr("")
        setAddress({
            ...address,
            [name]: value
        })
    }
    const handleCheckout = () => {
        if (!verify(address)) return alert("please add address")
        const newAddress = `${data[+address.province].Name},
        ${data[+address.province].Districts[+address.districts].Name},
        ${data[+address.province].Districts[+address.districts].Wards[+address.wards].Name}`
        orderApi.createOrder({
            name: address.name,
            phone: address.number,
            address: newAddress,
            total,
            card
        })
            .then(res => {
                if (res?.status === 500) return Toast.warn(res.data.msg)
                dispatch(addOrder({
                    name: address.name,
                    phone: address.number,
                    address: newAddress,
                    total,
                    card
                }))
                cartApi.remove()
                    .then(res => {
                        if (res?.msg === "remove success") {
                            dispatch(getCart([]))
                            history.push('/cart')
                        }
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }

    return (
        <CheckOutContainer>
            <h2>Address</h2>
            <AddressInfor>

                {address.province && address.districts && address.wards ?
                    <>
                        <Name>{address.name} ({address.number})</Name>
                        <p>{data[+address.province].Name},
                    {data[+address.province].Districts[+address.districts].Name},
                    {data[+address.province].Districts[+address.districts].Wards[+address.wards].Name}</p>
                    </>
                    :
                    ""}
                <BtnAdd onClick={() => setToggle(true)}>{address.name ? "Edit" : "Add new"}</BtnAdd>
            </AddressInfor>
            <Head >
                <h2>List Product</h2>
                <Total>Total: ${total.format()}</Total>
            </Head>
            <ListItem>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {card.map(i => {
                        return (
                            <tr>
                                <td>{i.product.title}</td>
                                <td>{i.quantity}</td>
                                <td>${(i.product.price * i.quantity).format()}</td>

                            </tr>
                        )
                    })}

                </tbody>
            </ListItem>
            <CheckOutBtn onClick={handleCheckout}>Check Out</CheckOutBtn>
            {toggle ? <Modal  >

                <Form>
                    <h2>Address Infor</h2>
                    <input
                        required
                        placeholder="Your Name"
                        type="text"
                        name="name"
                        value={address.name}
                        onChange={handleOnChange}
                    />
                    <input
                        required
                        placeholder="Phone Number"
                        type="text"
                        name="number"
                        value={address.number}
                        onChange={handleOnChange}

                    />

                    <select
                        value={address.province}
                        onChange={handleOnChange}
                        name='province'>
                        <option value='' disabled>Select Province</option>
                        {data.map((i, index) => {
                            return <option
                                value={index}
                            >
                                {i.Name}
                            </option>
                        })}

                    </select>
                    <select
                        onChange={handleOnChange}
                        value={address.districts}
                        name="districts"
                    >
                        <option value='' disabled>Select District</option>
                        {

                            districts.map((i, index) => {
                                return <option
                                    value={index}
                                >
                                    {i.Name}
                                </option>
                            })}
                    </select>
                    <select
                        value={address.wards}
                        onChange={handleOnChange}
                        name="wards"
                    >
                        <option value='' disabled>Select Ward</option>
                        {wart.map((i, index) => {
                            return <option
                                value={index}
                            >
                                {i.Name}
                            </option>
                        })}
                    </select>
                    {err ? <p style={{ color: "red" }} >{err}</p> : ""}
                    <button type="button" onClick={(e) => {

                        if (!verify(address)) return

                        setToggle(false)
                    }} >submit</button>
                    <button type="button" onClick={() => setToggle(false)} >Cancel</button>

                </Form>
            </Modal> : ""}

        </CheckOutContainer>
    )
}

export default CheckOut
