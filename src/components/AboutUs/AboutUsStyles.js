import { styled } from "styled-components";

export const AboutUsContainerStyled = styled.div`
  margin: 0 auto;
  padding: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  @media (max-width: 750px) {
    padding: 20px 10px;
  }
`;
export const AboutUsContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 750px) {
    gap: 5px;
    }
  h2 {
    color: rgb(158, 158, 6);
    font-size: 30px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
    @media (max-width: 460px) {
      font-size: 17px;
    }
  }
  p {
    color: white;
    font-size: 20px;
    font-weight: 700;
    max-width: 600px;
    @media (max-width: 750px) {
      font-size: 12px;
      max-width: 350px;
    }
    @media (max-width: 460px) {
      font-size: 11px;;
    }
  }
`;
export const AboutUsContainerImg = styled.div`
  img {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    @media (max-width: 750px) {
      width: 180px;
      height: 110px;
    }
    @media (max-width: 460px) {
      width: 150px;
      height: 110px;
    }
  }
`;
