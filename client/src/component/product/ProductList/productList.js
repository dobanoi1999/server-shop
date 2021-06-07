import productApi from 'api/productApi'
import Toast from 'component/shared/Toast/Toast'
import { Button } from 'globalCss'
import React, { ReactDOM } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchProductList } from 'redux/action/product'
import ProductItem from '../ProductItem/productItem'
import { ListProduct } from './productList.element'
import ContentLoader from 'react-content-loader'
const ProductList = () => {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery()
    const search = query.get("search")
    let { data, loading, err } = useSelector(state => state.product)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const dispatch = useDispatch()


    if (search) {
        data = data.filter(i => {
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

    const fakeArr = [1, 2, 3, 4, 5, 6, 7, 8]

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

                {loading ? fakeArr.map(() => <ContentLoader
                    width={300}
                    height={300}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
                    <rect x="0" y="210" rx="5" ry="5" width="70" height="10" />
                    <rect x="0" y="230" rx="4" ry="4" width="190" height="30" />
                    <rect x="0" y="280" rx="3" ry="3" width="70" height="10" />
                </ContentLoader>) : err ? <p>{err}</p>
                    : data.map((product, index) => {
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
