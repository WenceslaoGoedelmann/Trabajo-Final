import React from "react";

import MyOrderCard from "./MyOrderCard";
import { useSelector } from "react-redux";
import { MyOrdersContainer } from "./MyOrdersStyles";

const MyOrders = () => {
  const { orders } = useSelector((state) => state.orders);
  return (
    <MyOrdersContainer>
        <h2>Historial de Pedidos</h2>
      {orders?.length ? (
        orders.map((order) => <MyOrderCard key={order._id} {...order} />)
      ) : (
        <p>Aun no hay pedidos!  </p>
      )}
    </MyOrdersContainer>
  );
};

export default MyOrders;
