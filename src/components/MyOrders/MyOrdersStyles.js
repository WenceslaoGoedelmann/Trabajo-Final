import { styled } from "styled-components";

export const MyOrdersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  justify-content: center;
  width: 800px;
  min-height: 300px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px black;
  background: rgb(150, 150, 150);
  h2 {
    padding: 20px 0px;
    color: black;
    @media (max-width: 500px) {
      font-size: 22px;
      padding: 10px 0px;
    }
  }
  @media (max-width: 850px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const MyOrderCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 500px;
  box-shadow: 10px 5px 5px black;
  border-radius: 5px;
  padding: 5px;
  background: rgb(100, 100, 100);
  margin: 5px;
  p {
    margin: 3px 0;
    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  p:last-child {
    font-weight: bold;
  }
  @media (max-width: 850px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 270px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  @media (max-width: 500px) {
    width: 270px;
    font-size: 13px;
  }
`;

export const ItemCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  color: white;
  margin: 5px;
  width: 400px;
  height: 60px;
  padding-bottom: 5px;
  @media (max-width: 850px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    @media (max-width: 500px) {
      height: 35px;
      width: 35px;
    }
  }
  p {
    text-align: center;
    @media (max-width: 850px) {
      font-size: 15px;
    }
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-content: center;
`;
