import cartApi from "api/cartApi";
import Toast from "component/shared/Toast/Toast";
import { Button } from "globalCss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart } from "redux/action/cart";
import ProductItem from "../ProductItem/productItem";
import {
  Desc,
  Detail,
  DetailProduct,
  Image,
  Name,
  Price,
  Related,
} from "./productDetail.element";
export default function ProductDetail() {
  const param = useParams();
  const products = useSelector((state) => state.product);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  useEffect(() => {
    if (param && products.length > 0) {
      const product = products.find((i) => i._id === param.id);
      setProduct(product);
    }
  }, [param, products]);
  const handleAddProduct = () => {
    if (!isLogged) return alert("please login to add");
    cartApi
      .addToCart(product)
      .then((res) => {
        if (res.status === 500) {
          return Toast.warn(res.data.msg);
        }

        dispatch(addProductToCart({ product, quantity: 1 }));
        Toast.success("add success", {
          autoClose: 2000,
        });
      })
      .catch((err) => console.log(err));
  };
  if (!product)
    return (
      <p style={{ fontSize: "2rem", textAlign: "center" }}>Product not found</p>
    );
  return (
    <>
      <DetailProduct>
        <Image src={product.image.url} />
        <Detail>
          <Name>{product.title}</Name>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <Button bgColor="primary" fontBig onClick={handleAddProduct}>
            add to cart
          </Button>
        </Detail>
      </DetailProduct>
      <Related>
        {products.map((i) => {
          if (i.category === product.category) {
            return <ProductItem key={i._id} product={i} />;
          }
          return "";
        })}
      </Related>
    </>
  );
}
