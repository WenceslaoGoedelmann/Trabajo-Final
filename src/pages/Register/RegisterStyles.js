import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-top: 110px;
  background:rgb(150, 150, 150);
  margin-left: 10%;
  margin-right: 10%;
  padding: 10px;
  border-radius: 10px;
  max-width: 550px;
  box-shadow: 10px 5px 5px black;
  h1{
      @media (max-width: 750px) {
    font-size: 22px;
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
  p{
    cursor: pointer;
    @media (max-width: 750px) {
    font-size: 13px;
    }
  }
`;
export const RegisterWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
background-color: rgb(50, 50, 50); 
padding-bottom:10px;
`;




