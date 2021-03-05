import orderApi from "api/orderApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "../Order.element";
import {
  DetailContainer,
  OrderDetail,
  OrderId,
  ListProduct,
  Address,
  Status,
} from "./OrderDetail.element";
const OrderDe = () => {
  const params = useParams();
  const [order, setOrder] = useState();
  useEffect(() => {
    if (params.id) {
      orderApi
        .getOrder(params.id)
        .then((res) => {
          console.log(res);
          setOrder(res.order);
        })
        .catch((err) => console.log(err));
    } else {
      setOrder({});
    }
  }, [params]);
  if (!order) return <p>Loading</p>;
  return (
    <DetailContainer>
      <h2>Order Detail</h2>
      <OrderDetail>
        <OrderId>
          <p>Order {order._id}</p>
          <p>Placed on:{new Date(order.createdAt).toLocaleDateString()}</p>
        </OrderId>
        <p>Total: ${order.total}</p>
      </OrderDetail>
      <Address>
        <p>Shipping Address</p>
        <p>{order.address}</p>
      </Address>

      <ListProduct>
        <Status>
          <p>{order.status}</p>
        </Status>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Name </th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "#fff",
            }}
          >
            {order.card.map((i) => {
              return (
                <tr key={i._id}>
                  <td>
                    <img
                      style={{
                        width: "80px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      src={i.product.image.url}
                      alt="img"
                    />
                  </td>
                  <td data="Name"> {i.product.title}</td>
                  <td data="Quantity">{i.quantity}</td>
                  <td data="Price">${i.product.price.format()}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ListProduct>
    </DetailContainer>
  );
};

export default OrderDe;
