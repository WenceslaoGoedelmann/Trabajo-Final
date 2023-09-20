import React from "react";
import {
  Btns,
  BtnsConteiner,
  CartContainerStyled,
  CartProductsContainer,
  PriceConteiner,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { AnimatePresence } from "framer-motion";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { ModalOverlayStyled } from "../NabarStyles";

const ModalCart = () => {
  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const navigate = useNavigate();
  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <CartContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CartProductsContainer>
              {cartItems.length ? (
                cartItems.map((item) => <CartCard key={item.id} {...item} />)
              ) : (
                <p>No hay productos todavía</p>
              )}
            </CartProductsContainer>
            <PriceConteiner>
              <p>Subtotal: ${totalPrice}</p>
              <p>Envio: ${shippingCost}</p>
              {/* <p>Envio: {totalPrice>1000 ? 'Gratis' : <span>${shippingCost}</span>}</p> */}
              <p>Total: ${totalPrice + shippingCost}</p>
            </PriceConteiner>
            <BtnsConteiner>
              <Btns
                onClick={() => {
                  navigate("/checkout");
                  dispatch(toggleHiddenCart());
                }}
                disabled={!cartItems.length}
              >
                Finalizar Compra
              </Btns>
              <Btns
                onClick={() => dispatch(clearCart())}
                disabled={!cartItems.length}
              >
                Vaciar carrito
              </Btns>
            </BtnsConteiner>
          </CartContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
