import React from "react";
import { Form, LoginContainer, LoginWrapper } from "../Login/LoginStyles";
import { Formik } from "formik";
import {  verifyInitialValues } from "../../formik/initialValues";
import {  verifyValidationSchema } from "../../formik/validationSchema";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import { useNavigate } from "react-router-dom";
import Submit from "../../components/UI/Sumit/Submit";
import {  verifyUser } from "../../axios/axios.user";
import Loader from "../../components/UI/Loader/Loader";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <LoginContainer>
        <h1>Verificar Usuario</h1>
        <Formik
          initialValues={verifyInitialValues}
          validationSchema={verifyValidationSchema}
          onSubmit={async (values) => {
            try{
            await verifyUser (values.code, values.email);
            alert("Usuario verificado con exito!!");
            navigate("/");
            } catch (error){
                alert("Oops, algo salió mal al verificar el usuario");
            }
          }}

        >
          {({ isSubmitting }) => (
            <Form>
              <LoginInput type="text" name="code" placeholder="Codigo" />
              <LoginInput type="text" name="email" placeholder="Email" />

              <Submit type="button">
                {" "}
                {isSubmitting ? <Loader /> : "Enviar"}
              </Submit>
            </Form>
          )}
        </Formik>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Verify;
