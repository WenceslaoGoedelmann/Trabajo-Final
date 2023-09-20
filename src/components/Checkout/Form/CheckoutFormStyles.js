import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutFormContainer = styled.div`
        background:rgb(150, 150, 150);
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 15px;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 5px 5px black;
        @media (max-width: 650px) {
        width: 300px;
    }
        h2{
          @media (max-width: 650px) {
        font-size: 17px;
    }
        }
        
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    
    }
`;