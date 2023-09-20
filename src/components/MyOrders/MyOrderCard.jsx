import React from "react";
import {  ItemsContainer, MyOrderCardContainer, TitleContainer } from "./MyOrdersStyles";
import ItemCard from "./ItemCard";

const MyOrderCard = ({ total, _id, items,createdAt,price,shippingCost }) => {
  const anio = createdAt.slice(0, 4)
  const mes = createdAt.slice(5, 7)
  const dia = createdAt.slice(8, 10)
  const fecha= dia+"/"+mes+"/"+anio
  return (
    <MyOrderCardContainer>
      <TitleContainer>
      <h4>Pedido N°: {_id.slice(0, 7)}</h4>
      <h4>Fecha: {fecha}</h4>
      </TitleContainer>
      <ItemsContainer>
        {items.map((items) => (
          <ItemCard key={items.id} {...items} />
        ))}
      </ItemsContainer>
      <p>Subtotal: ${price}</p>
      <p>Costo Envio: ${shippingCost}</p>
      <p>Costo total: ${total}</p>
    </MyOrderCardContainer>
  );
};

export default MyOrderCard;
