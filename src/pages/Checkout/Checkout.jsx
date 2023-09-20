import React from 'react'
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout'
import { CheckoutWrapper } from './CheckoutStyles'
import { useSelector } from 'react-redux';
import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  
  return (
    <CheckoutWrapper>
      <ProductsCheckout
        cartItems={cartItems}
        shippingCost={shippingCost}
        totalPrice={totalPrice}
      />
      
      <CheckoutForm         
        cartItems={cartItems}
        shippingCost={shippingCost}
        totalPrice={totalPrice}/>
    </CheckoutWrapper>
  )
}

export default Checkout