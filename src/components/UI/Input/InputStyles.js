import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  @media (max-width: 650px) {
    width: 300px;
  }
`;

export const InputTitle = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

export const InputStyled = styled.input`
  background-color: white;
  outline: none;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  border-radius: 8px;
  height: 30px;
  color: white;
  width: 70%;
  margin-top: 1rem;
  padding-left: 5px;
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: black;
  font-size: 14px;
`;
