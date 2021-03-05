import productApi from 'api/productApi'
import Toast from 'component/shared/Toast/Toast'
import { Button } from 'globalCss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchProductList } from 'redux/action/product'
import ProductItem from '../ProductItem/productItem'
import { ListProduct } from './productList.element'

const ProductList = () => {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery()
    const search = query.get("search")
    let products = useSelector(state => state.product)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const dispatch = useDispatch()


    if (search) {
        products = products.filter(i => {
            return i.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }
    const handleDeleteAll = () => {
        if (window.confirm("delete all ?")) {
            productApi.deleteAll()
                .then(res => {
                    if (res.status === 500) return Toast.warn(res.data.msg)
                    dispatch(fetchProductList([]))
                })
                .catch(err => console.log(err))
        }
    }

    if (products.length === 0) return <p style={{ fontSize: "2rem", textAlign: "center" }}>
        There are no products placed yet.
  </p>

    return (
        <>
            {isAdmin ? <Button
                style={{
                    marginTop: "10px",
                    float: "right"

                }}
                bgColor="cancel"
                fontBig
                onClick={handleDeleteAll}
            >
                Delete All
            </Button> : ""}
            <ListProduct>

                {products.map((product, index) => {
                    return <ProductItem
                        isAdmin={isAdmin}
                        index={index}
                        key={product._id}
                        product={product}
                    />
                })}

            </ListProduct>
        </>
    )
}

export default ProductList
