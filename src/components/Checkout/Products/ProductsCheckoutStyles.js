import styled from "styled-components";

export const ProductsChekoutContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(150, 150, 150);
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
  min-height: 310px;
  justify-content: center;
  box-shadow: 10px 5px 5px black;
  padding-bottom: 15px;
  h2 {
    color: black;
    font-size: 20px;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 5px;
    @media (max-width: 650px) {
        font-size: 17px;
    }
  }
  @media (max-width: 650px) {
        width: 300px;
        margin-top: 100px;
    }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 100px;
  border-bottom: 1px solid black;
  @media (max-width: 650px) {
      height:60px;
      width: 250px;
    }
  img {
    height: 65px;
    width: 65px;
    border-radius: 5px;
    @media (max-width: 650px) {
      height: 40px;
      width: 40px;
    }
  }
`;

export const ItemTitulo = styled.div`
text-align: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 650px) {
        font-size: 13px;
    }
`;
export const ItemPrecio = styled.div`
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding-right: 3px;
  @media (max-width: 650px) {
        font-size: 13px;
    }
`;
export const ItemCant = styled.div`
  color: white;
  @media (max-width: 650px) {
        font-size: 13px;
    }
`;
export const Divider = styled.div`
  margin: 20px 0;
  margin-left: 10%;
  margin-right: 10%;
  border: 0.5px solid black;
  width: 90%;
`;

export const PriceConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: black;
  p{
        @media (max-width: 650px) {
        font-size: 13px;
    }
  }
  p:last-child {
    font-weight: bold;
  }
`;
