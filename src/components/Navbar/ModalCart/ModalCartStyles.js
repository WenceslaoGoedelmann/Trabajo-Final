import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainerStyled = styled(motion.div)`
  position: fixed;
  top: 85px;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 450px;
  height: 85%;
  padding: 2rem;
  background-color: grey;
  border-radius:  1rem 0 0 1rem;
  box-shadow: 0 0 10px 5px black;
  @media (max-width: 600px) {
    width: 360px;
    }
    @media (max-width: 480px) {
    width: 300px;
    }
`;
export const CartProductsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 400px;
  height: 100px;
  border: 1px solid black; 
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(100, 100, 100);
  @media (max-width: 600px) {
    width: 300px;
  height: 100px;
    }
    @media (max-width: 480px) {
    width: 260px;
    height: 70px;
    }
  img {
    height: 65px;
    width: 65px;
    border-radius: 5px;
    @media (max-width: 480px) {
      height: 50px;
    width: 50px;
    }
  }
`;

export const TitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h2 {
    font-size: 15px;
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  p {
    font-size: 15px;
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const ItemHandler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HandlerDownUp = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  background-color: rgb(50, 50, 50);
  width:18px;
  @media (max-width: 480px) {
    font-size: 13px;
    }
`;
export const HandlerQuantity = styled.span`
  color: white;
  @media (max-width: 480px) {
    font-size: 13px;
    }
`;
export const PriceConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const BtnsConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Btns = styled.button`
  background: rgb(87, 87, 87);
  height: 30px;
  width: 100px;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  font-weight: 800;
  color: white;
  box-shadow: 10px 5px 5px black;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
