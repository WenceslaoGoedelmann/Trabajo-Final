import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 250px;
  margin-top: 120px;
  background:rgb(150, 150, 150);
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  @media (max-width: 650px) {
    margin-top: 100px;
    gap: 10px;
    padding: 5px;
    height: 200px;
    }  
  h1{
    @media (max-width: 650px) {
        font-size: 15px;
    }  
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;
export const ForgotWrapper = styled.div`
width: 100%;
height: auto;
padding-bottom:220px;
display: flex;
justify-content: center;
background-color: rgb(50, 50, 50); 
`;