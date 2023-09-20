import React from "react";
import { CheckoutFormContainer, Form, Formik } from "./CheckoutFormStyles";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Sumit/Submit";
import Loader from "../../UI/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../axios/axios.orders";
import { clearCart } from "../../../redux/cart/cartSlice";

const CheckoutForm = ({ cartItems, shippingCost, totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <CheckoutFormContainer>
      <h2>Datos de Envio</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {

            items: cartItems,
            price:totalPrice,
            shippingCost,
            total: totalPrice + shippingCost,
            shippingDetails: { ...values },
          };
         
          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate("/confirmed");
            dispatch(clearCart());
          } catch (error) {
            alert("Oops, algo salió mal al crear la orden");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              htmlFor="nombre"
              name="name"
              type="text"
              id="nombre"
              placeholder="Tu nombre"
            >
              Nombre
            </Input>
            <Input
              htmlFor="celular"
              type="text"
              name="cellphone"
              id="celular"
              placeholder="Tu celular"
            >
              Celular
            </Input>
            <Input
              htmlFor="localidad"
              type="text"
              name="location"
              id="localidad"
              placeholder="Tu localidad"
            >
              Localidad
            </Input>
            <Input
              htmlFor="direccion"
              type="text"
              name="address"
              id="dirección"
              placeholder="Tu dirección"
            >
              Dirección
            </Input>
            <div>
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : "Iniciar Pedido"}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutFormContainer>
  );
};

export default CheckoutForm;
