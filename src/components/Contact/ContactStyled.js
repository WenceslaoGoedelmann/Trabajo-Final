import { styled } from "styled-components";

export const ContactContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
  @media (max-width: 320px) {
    padding: 20px;
    }
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  b {
    color: white;
    font-size: 20px;
    font-weight: 250;
    padding-bottom: 5px;
    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
  span {
    color: white;
    padding: 3px 0;
    @media (max-width: 750px) {
      font-size: 13px;
    }
    @media (max-width: 375px) {
      font-size: 11px;
    }
  }
`;
export const Redes = styled.div`
  display: flex;
  flex-direction: column;
  b {
    color: white;
    font-size: 20px;
    font-weight: 250;
    padding-bottom: 5px;
    @media (max-width: 750px) {
      font-size: 15px;
    }
  }
`;
export const LinksRedes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  img {
    height: 35px;
    width: 35px;
    @media (max-width: 750px) {
      height: 30px;
      width: 30px;
    }
  }
`;
