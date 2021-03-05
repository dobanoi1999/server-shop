import categoryApi from 'api/categoryApi';
import Toast from 'component/shared/Toast/Toast';
import { Button } from 'globalCss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, removeCategory, updateCategory } from 'redux/action/category';
import { StyledWrapper, CategoryItem, CategoryName, ContainerOver, FormCreate, Input, ListCategory } from './Category.element';

const Category = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()
    const [sending, setSending] = useState(false)
    const [cate, setCate] = useState({
        name: "",
        _id: ""
    })
    const [isCreate, setIsCreate] = useState(true)
    const findIndex = (arr, id) => {
        let index = -1
        arr.map((i, indx) => {

            if (i._id === id) {

                return index = indx
            }

        })
        return index;
    }
    const handleDelete = (id) => {
        setSending(true)
        if (window.confirm("Are you sure you want to delete?")) {
            categoryApi.delete(id)
                .then(res => {
                    setSending(false)
                    if (res.status === 500) {
                        return Toast.warn(res.data.msg)
                    }
                    if (res?.msg) {
                        Toast.success(res.msg)
                        dispatch(removeCategory(findIndex(category, id)))
                    } else {
                        Toast.error()
                    }


                })
                .catch(err => console.log(err))
        }
    }

    const handleCreate = () => {
        if (cate.name === "") return
        setSending(true)
        categoryApi.create({ name: cate.name })
            .then(res => {
                setSending(false)
                if (res.status === 500) {
                    if (res?.data?.msg) {
                        return Toast.warn(res.data.msg)
                    }
                    console.log(res)
                    return Toast.error()
                }

                else if (res?.msg) {
                    Toast.success(res.msg)
                    dispatch(addCategory(res.category))

                }
            })
            .catch(err => console.log(err))
    }
    const handleUpdate = () => {
        if (cate.name === "") return
        setSending(true)
        const index = findIndex(category, cate._id)

        categoryApi.update(cate._id, cate.name)
            .then(res => {
                setSending(false)
                if (res?.msg) {
                    Toast.success(res.msg)
                    dispatch(updateCategory(cate.name, index))
                } else {
                    Toast.error()
                }

            })
            .catch(err => console.log(err))

    }

    return (

        <ContainerOver>
            <StyledWrapper>
                <FormCreate >
                    <Input

                        onChange={(e) => {

                            setCate({
                                ...cate,
                                name: e.target.value

                            })
                        }} name="name"
                        value={cate.name}
                        type="text"
                        required />
                    {isCreate ?
                        <Button
                            disabled={sending}
                            type="button"
                            bgColor="primary"

                            onClick={handleCreate}
                        > Create </Button> :
                        (<>
                            <Button
                                disabled={sending}
                                type="button"
                                bgColor="#198754"
                                onClick={handleUpdate}
                            > update
                            </Button>
                            <Button
                                disabled={sending}
                                type="button"
                                bgColor="cancel"
                                onClick={() => {
                                    setCate({
                                        name: "", _id: ""
                                    })
                                    setIsCreate(true)
                                }}
                            > cancel </Button>
                        </>
                        )
                    }
                </FormCreate>
                <ListCategory>
                    {category.map(i => {
                        const dis = i._id === cate._id ? true : false
                        return <CategoryItem key={i._id}>

                            <CategoryName>{i.name}</CategoryName>
                            <Button bgColor="cancel" disabled={dis ? dis : sending} onClick={() => handleDelete(i._id)} >
                                delete
                                </Button>
                            <Button
                                disabled={sending}
                                bgColor="#198754"
                                onClick={() => {

                                    setCate({
                                        name: i.name,
                                        _id: i._id

                                    })
                                    setIsCreate(false)

                                }} >update</Button>
                        </CategoryItem>
                    }
                    )}
                </ListCategory>

            </StyledWrapper>
        </ContainerOver>
    )
}

export default Category
