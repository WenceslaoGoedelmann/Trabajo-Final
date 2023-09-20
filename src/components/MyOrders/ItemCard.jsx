import React from 'react'
import { ItemCardContainer } from './MyOrdersStyles'

const ItemCard = ({title, price,quantity,img}) => {
  return (
    <ItemCardContainer>
    <img src={img} alt={title} />
    <p>{title}</p>
    <p>{quantity}</p>
    <p>${price}</p>
    </ItemCardContainer>
  )
}

export default ItemCard