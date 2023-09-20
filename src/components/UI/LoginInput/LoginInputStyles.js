import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: black;
  background-color: white;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  @media (max-width: 750px) {
    width:200px;
    padding: 0.8rem 1.2rem;
    }
`;

export const ErrorMessageStyled = styled.p`
  margin: 5px 0px 0px 15px;
  color: black;
  font-size: 13px;
`;

export const InputTitle= styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  `;