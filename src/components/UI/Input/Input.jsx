
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ErrorMessageStyled, InputContainer, InputStyled, InputTitle } from './InputStyles'

const Input = ({ children, name, htmlFor, type, id, placeholder }) => {
  return (
    <Field name={name}>
        {({ field, form: { errors, touched } }) => (
            <InputContainer>
                <InputTitle htmlFor={htmlFor}>{children}</InputTitle>
                <InputStyled
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  {...field}
                  isError={errors[field.name] && touched[field.name]}
                />
                <ErrorMessage name={field.name}>
                  {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
                </ErrorMessage>
            </InputContainer>
        )}    
    </Field>
  )
}

export default Input