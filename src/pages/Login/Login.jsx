import React from 'react'
import { Form, LoginContainer, LoginWrapper } from './LoginStyles'
import { Formik } from 'formik'
import { loginInitialValues } from '../../formik/initialValues'
import { loginValidationSchema } from '../../formik/validationSchema'
import LoginInput from '../../components/UI/LoginInput/LoginInput'
import {  useNavigate } from 'react-router-dom'
import Submit from '../../components/UI/Sumit/Submit'
import { useDispatch } from 'react-redux'
import { useRedirect } from '../../hooks/useRedirect'
import { loginUser } from '../../axios/axios.user'
import { setCurrentUser } from '../../redux/user/userSlice'
import Loader from '../../components/UI/Loader/Loader'


const Login = () => {
  const dispatch = useDispatch()
  useRedirect('/')
  const navigate = useNavigate();
  return (
    <LoginWrapper>
    <LoginContainer>
        <h1>Iniciar Sesion</h1>
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values) => {
              const user = await loginUser(values.email, values.password)
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
          <LoginInput type='text' name='email' placeholder='Email' />
          <LoginInput type='password' name='password' placeholder='Password' />

          <h4 onClick={() => navigate('/forgot-password')}>¿Olvidaste la contraseña? Reestablecela.</h4 >
          <h4 onClick={() => navigate('/register')}>¿No tenes cuenta? Registrate.</h4 >
          <Submit type='button'> {isSubmitting ? <Loader /> : "Iniciar Sesión"}</Submit>
          </Form>  
          )}
        </Formik>
    </LoginContainer>
    </LoginWrapper>
  )
}

export default Login