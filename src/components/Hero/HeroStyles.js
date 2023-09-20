import { styled } from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  align-content: center;
  padding: 120px 50px 50px 50px;
  gap: 15px;
  @media (max-width: 750px) {
    padding: 120px 10px 20px 10px;
  }
`;

export const HeroContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  h1 {
    color: white;
    font-size: 30px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
  p {
    color: white;
    font-size: 20px;
    text-align: center;
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }
`;
export const HeroContainerImg = styled.div`
  img {
    width: 350px;
    height: 200px;
    border-radius: 5px;
    @media (max-width: 750px) {
      width: 200px;
      height: 110px;
    }
    @media (max-width: 460px) {
      width: 160px;
      height: 100px;
    }
  }
`;
