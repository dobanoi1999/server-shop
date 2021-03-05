import orderApi from "api/orderApi";
import Toast from "component/shared/Toast/Toast";
import { Button } from "globalCss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Action, ContainerHistory, Status, Table } from "./Order.element";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi
      .fetchOrder()
      .then((res) => {
        if (res?.orders) {
          setOrders(res.orders);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  if (orders.length === 0)
    return (
      <p style={{ fontSize: "2rem", textAlign: "center" }}>
        There are no orders placed yet.
      </p>
    );
  const handleCancel = (id) => {
    if (window.confirm("you sure cancel ?")) {
      orderApi
        .cancelOrder(id)
        .then((res) => {
          if (res.status === 500) return Toast.warn(res.data.msg);
          const index = orders.findIndex((i) => i._id === id);

          if (index !== undefined) {
            orders[index].status = "cancelled";
            setOrders([...orders]);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <ContainerHistory>
      <Table>
        <thead>
          <th>ID</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {orders.map((i, index) => {
            const date = new Date(i.createdAt);
            const dis = i.status === "pending" ? false : true;
            return (
              <tr key={i._id}>
                <td data="ID">{i._id}</td>
                <td data="Date">{date.toLocaleDateString()}</td>
                <Status data="Status" $status={i.status}>
                  {i.status}
                </Status>
                <Action data="Action">
                  <Link to={`/my_order/${i._id}`}>View</Link>
                  <Button
                    bgColor="primary"
                    disabled={dis}
                    onClick={() => handleCancel(i._id, index)}
                  >
                    Cancel
                  </Button>
                </Action>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ContainerHistory>
  );
};

export default Order;
