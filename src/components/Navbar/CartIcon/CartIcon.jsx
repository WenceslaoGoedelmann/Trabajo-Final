import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';


const CartIcon = () => {
  const dispatch = useDispatch()
  const totalCartItemsQuantity = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  )
  return (
    <div onClick={() => dispatch(toggleHiddenCart())}>
    <FaShoppingCart />
    <span>{totalCartItemsQuantity}</span>
    </div>
  )
}

export default CartIcon