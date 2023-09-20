import { styled } from "styled-components";

export const ProductosContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px 20px;
`;

export const ProductoContainerStyled = styled.div`
  background: rgb(150, 150, 150);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  box-shadow: 10px 5px 5px black;
  align-items: center;
  width: 290px;
  @media (max-width: 750px) {
    width: 150px;
    height: 240px;
    padding: 10px;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 10%;
    box-shadow: 10px 5px 5px black;
    @media (max-width: 750px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const CardProductoTop = styled.div`


  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: white;
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }
`;
export const CardProductoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
export const CardProductoMid = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 800;
    color: white;
    padding-right: 5px;
    @media (max-width: 750px) {
      font-size: 12px;
      padding-right: 0px;
    }
  }
  span {
    font-weight: 800;
    color: white;
    @media (max-width: 750px) {
      font-size: 12px;
    }
  }
`;
export const CardProductoBot = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;

export const BtnAgregar = styled.button`
  background: rgb(87, 87, 87);
  height: 40px;
  width: 130px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  color: white;
  box-shadow: 10px 5px 5px black;

  @media (max-width: 750px) {
    font-size: 10px;
    height: 30px;
    width: 100px;
  }
`;
export const BtnMasMenos = styled.button`
  background: rgb(50, 50, 50);
  height: 30px;
  width: 80px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  margin: 5px;
  color: white;
  box-shadow: 10px 5px 5px black;
  border: 1px solid rgb(70, 70, 70);
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ButtonConteiner = styled.div`
  display: flex;
  justify-content: center;
`;
