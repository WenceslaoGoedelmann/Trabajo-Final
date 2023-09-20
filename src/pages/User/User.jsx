import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContainer } from "./UserStyles";

import MyOrders from "../../components/MyOrders/MyOrders";
import { getOrders } from "../../axios/axios.orders";
import { clearError, fetchOrdersFail } from "../../redux/orders/ordersSlice";
import Usuario from "../../components/Usuario/Usuario";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);
  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);
  return (
    <UserContainer>
      <Usuario />
      <MyOrders />
    </UserContainer>
  );
};

export default User;
