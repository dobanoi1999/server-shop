import historyApi from "api/historyApi";
import Toast from "component/shared/Toast/Toast";
import { Button } from "globalCss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Action,
  ContainerHistory,
  Status,
  Table,
} from "../Order/Order.element";

const History = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    historyApi
      .getAll()
      .then((res) => {
        if (res?.orders) {
          setOrders(res.orders);
        }
      })
      .catch((err) => console.log(err));
  });
  const handleChangeStatus = (id, status) => {
    if (window.confirm("Are you sure  ?")) {
      historyApi
        .changeStatus(id, status)
        .then((res) => {
          if (res.status === 500) return Toast.warn(res.data.msg);
        })
        .catch((err) => console.log(err));
    }
  };
  if (orders.length === 0)
    return (
      <p style={{ fontSize: "2rem", textAlign: "center" }}>
        There are no orders placed yet.
      </p>
    );
  return (
    <ContainerHistory>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID User</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((i) => {
            const date = new Date(i.createdAt);

            return (
              <tr key={i._id}>
                <td data="ID">{i._id}</td>
                <td data="UserID">{i.userId}</td>
                <td data="Date">{date.toLocaleDateString()}</td>
                <Status data="Status" $status={i.status}>
                  {i.status}
                </Status>
                <Action data="Action">
                  <div>
                    <Link to={`/history/${i._id}`}>View</Link>
                    <Button
                      bgColor="cancel"
                      onClick={() => handleChangeStatus(i._id, "canceled")}
                    >
                      Cancel
                    </Button>
                    <Button
                      bgColor="green"
                      onClick={() => handleChangeStatus(i._id, "shipped")}
                    >
                      Shipped
                    </Button>
                  </div>
                </Action>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ContainerHistory>
  );
};

export default History;
