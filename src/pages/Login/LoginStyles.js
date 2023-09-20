import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width:500px;
  margin: 120px 0 60px 0;
  background:rgb(150, 150, 150);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  @media (max-width: 750px) {
    width:300px;
    gap: 5px;
    }
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
  padding: 0.5rem 2rem;
  gap: 20px;
  @media (max-width: 750px) {
    gap: 10px;
    }
    h4 {
      text-align: center;
    cursor: pointer;
    @media (max-width: 750px) {
    font-size: 12px;
    }
  }
`;
export const LoginWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
background-color: rgb(50, 50, 50); 
`;


