import React from 'react'
import { CartItemContainer, HandlerDownUp, HandlerQuantity, ItemHandler, TitlePrice } from './ModalCartStyles'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../../redux/cart/cartSlice';
const CartCard = ({title,price,img, id, quantity, desc}) => {
    const dispatch = useDispatch()
  return (
    <CartItemContainer>
        <img src= {img} alt={title}/> 
        <TitlePrice>
            <h2>{title}</h2>
            <p>Precio:${price}</p>
        </TitlePrice>
        <ItemHandler>
            <HandlerDownUp 
            onClick={() => dispatch(removeToCart(id))}
            >-</HandlerDownUp>
            <HandlerQuantity>{quantity}</HandlerQuantity>
            <HandlerDownUp
             onClick={() => dispatch(addToCart({title,price,img, id, quantity,desc}))}
            >+</HandlerDownUp>
        </ItemHandler>
    </CartItemContainer>
  )
}

export default CartCard