import historyApi from "api/historyApi";
import { Table } from "component/Order/Order.element";
import {
  Address,
  DetailContainer,
  OrderDetail,
  OrderId,
} from "component/Order/OrderDetail/OrderDetail.element";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const HistoryDetail = () => {
  const params = useParams();
  const [order, setOrder] = useState();
  useEffect(() => {
    if (params.id) {
      historyApi
        .get(params.id)
        .then((res) => {
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
      <h2>History Detail</h2>
      <OrderDetail>
        <OrderId>
          <p>Order {order._id}</p>
          <p>Placed on:{new Date(order.createdAt).toLocaleDateString()}</p>
        </OrderId>
        <p>Total: ${order.total}</p>
      </OrderDetail>
      <Address>
        <p>Shipping Address</p>
        <p>
          {order.name} ({order.phone})
        </p>
        <p>{order.address}</p>
      </Address>

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
                <td data="Name">{i.product.title}</td>
                <td data="Quantity">{i.quantity}</td>
                <td data="Price">${i.product.price.format()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DetailContainer>
  );
};

export default HistoryDetail;
