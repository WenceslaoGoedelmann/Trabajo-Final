
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ErrorMessageStyled, InputContainer, InputTitle, LoginInputStyled } from './LoginInputStyles'


const LoginInput = ({ name, type, placeholder, children,htmlFor} ) => {
  return (
    <Field name={name}>
      {
      ({ field, form: { errors, touched }}) => (
        <InputContainer>
        <InputTitle htmlFor={htmlFor}>{children}</InputTitle>
        <LoginInputStyled
        type={type} 
        placeholder={placeholder}
        {...field}
        isError={errors[field.name] && touched[field.name]}        
        />
        <ErrorMessage name={field.name}>
        {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
      </ErrorMessage>
      </InputContainer>
        )
    }
    </Field>
  )
}

export default LoginInput