import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100px;
  padding: 0px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 98;
  background-color: rgb(70, 70, 70);
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 0 10px 10px black;
  @media (max-width: 750px) {
    height: 80px;
    padding: 0px 30px 0px 20px;
  }
`;
export const LogoContainer = styled.div`
  img {
    border-radius: 5px;
    @media (max-width: 750px) {
      width: 80;
      height: 50px;
    }
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 20px;
  color: white;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 750px) {
    margin-right: 10px;
    font-size: 15px;
  }
  @media (max-width: 475px) {
    display: none;
  }
`;
export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  @media (max-width: 750px) {
    font-size: 15px;
    margin-right: 10px;
  }
  @media (max-width: 475px) {
    display: none;
  }
`;

export const CartNavStyled = styled.div`
  font-size: 30px;
  color: white;
  cursor: pointer;
  position: relative;
  @media (max-width: 750px) {
    font-size: 16px;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    text-align: center;
    background: blue;
    color: white;
    font-size: 10px;
    font-weight: 500;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1px;
    border-radius: 50%;
    @media (max-width: 750px) {
      font-size: 8px;
      height: 15px;
      width: 15px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 100px;
left:0;
  z-index: 50;
  width: 100%;
  height: 100%;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(5px);
    `}
    @media (max-width: 750px) {
      top: 80px;
  }
`;

export const IconUserContainer = styled.div`
  font-size: 30px;
  color: white;
  cursor: pointer;
  padding-right: 40px ;
  padding-left: 40px ;
  @media (max-width: 750px) {
    font-size: 16px;
  }
`;
