import React from "react";
import { Form,  RegisterContainer, RegisterWrapper } from "./RegisterStyles";
import { Formik } from "formik";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Sumit/Submit";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/user/userSlice";
import { createUser } from "../../axios/axios.user";
import { useRedirect } from "../../hooks/useRedirect";
import Loader from "../../components/UI/Loader/Loader";


const Register = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');
  const navigate = useNavigate();
  return (
    <RegisterWrapper>
    <RegisterContainer>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(values.name, values.email, values.cellphone, values.location, values.address, values.password)
          actions.resetForm()
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }))
          }
        }}
      >
       {({ isSubmitting }) => (
        <Form>
        <LoginInput type="text" name="name" placeholder="Nombre" >Nombre</LoginInput>
        <LoginInput type="text" name="email" placeholder="Email" >Email</LoginInput>
          <LoginInput type="number" name="cellphone" placeholder="Celular" >Celular </LoginInput>
          <LoginInput type="text" name="location" placeholder="Ciudad" >Ciudad</LoginInput>
          <LoginInput type="text" name="address" placeholder="Dirección" >Dirección</LoginInput>
          <LoginInput type="password" name="password" placeholder="Contraseña" >Contraseña</LoginInput>
          <LoginInput type="password" name="passwordConfirmation" placeholder="Repetir contraseña" >Repetir contraseña</LoginInput>
          <p onClick={() => navigate('/login')}>¿Ya tenes cuenta? Inicia sesión</p>
          <Submit type='button'>{isSubmitting ? <Loader /> : "Registrate"}</Submit>
        </Form>
        )}
      </Formik>
    </RegisterContainer>
    </RegisterWrapper>
  );
};

export default Register;
