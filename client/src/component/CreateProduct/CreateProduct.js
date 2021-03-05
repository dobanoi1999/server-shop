
import productApi from 'api/productApi'
import Toast from 'component/shared/Toast/Toast'
import { Button } from 'globalCss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateProduct } from 'redux/action/product'
import {
    Container2, Form,
    Input, Label,
    Option, Select, Title
} from './CreateProduct.element'

const CreateProduct = ({ product, toggleModal, index }) => {

    const category = useSelector(state => state.category)
    const initialState = product || {
        title: "",
        description: "",
        category: category[0]?._id || "",
        price: "",
        file: ""
    }
    const dispatch = useDispatch()
    const [data, setData] = useState(initialState)
    const [sending, setSending] = useState(false)

    const handleOnchange = e => {
        const { name, value } = e.target
        if (name === "file") {
            setData({
                ...data,
                file: e.target.files[0]
            })
        }
        else {
            setData({
                ...data,
                [name]: value
            })
        }
    }

    const handleSubmit = e => {
        setSending(true)
        e.preventDefault()
        let formData = new FormData()
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("price", data.price)
        formData.append("category", data.category)

        if (product) {
            if (data.file) formData.append("file", data.file)
            productApi.update(data._id, formData)
                .then(res => {
                    setSending(false)
                    if (res.status === 500) {
                        return Toast.warn(res.data.msg)
                    }
                    if (res?.msg) {
                        let newData = data
                        if (res?.newImage) {
                            newData = {
                                ...data,
                                image: res.newImage
                            }
                        }
                        Toast.success(res.msg)
                        dispatch(updateProduct(newData, index))
                    }
                    else {
                        return Toast.error()
                    }
                })
                .catch(err => console.log(err))
        }
        else {
            formData.append("file", data.file)
            productApi.create(formData)
                .then(res => {
                    setSending(false)
                    if (res.status === 500) {
                        return Toast.warn(res.data.msg)
                    }
                    if (res?.msg) {
                        Toast.success(res.msg)
                        dispatch(addProduct(res.product))
                    }
                    else {
                        return Toast.error()
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (

        <Container2>
            <Title>{product ? "Update Product" : "Create Product"}</Title>
            <Form onSubmit={handleSubmit}>
                <Label>Title</Label>
                <Input required name="title" value={data.title} type="text" onChange={handleOnchange} />
                <Label>Description</Label>
                <Input required name="description" value={data.description} type="text" onChange={handleOnchange} />

                <Label>Price</Label>
                <Input required name="price" value={data.price} type="number" onChange={handleOnchange} />

                <Label>Image</Label>
                <Input
                    required={product ? false : true}
                    name="file"
                    type="file"
                    onChange={handleOnchange} />
                <Label>Category</Label>
                <Select name="category" value={data.category} onChange={handleOnchange} >
                    {category.map(i =>
                        <Option key={i._id} value={i._id} >{i.name}</Option>
                    )}
                </Select>
                {
                    product
                        ?
                        <Button
                            bgColor="primary"
                            fontBig
                            block
                            type="submit"
                            disabled={sending}>
                            {sending ? "loading" : "Update"}
                        </Button>
                        :
                        <Button
                            bgColor="primary"
                            fontBig
                            block
                            type="submit"
                            disabled={sending} >
                            {sending ? "loading" : "Submit"}
                        </Button>
                }
            </Form>
        </Container2>
    )
}

export default CreateProduct
