import { CreateProduct } from "component";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const params = useParams();
  const products = useSelector((state) => state.product);

  const [product, setProduct] = useState();
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    if (params.id) {
      products.map((i, index) => {
        if (i._id === params.id) {
          setIndex(index);
          return setProduct(i);
        }
        return "";
      });
    }
  }, [params]);
  if (!product) return <p>not found</p>;
  return <CreateProduct product={product} index={index} />;
};

export default UpdateProduct;
