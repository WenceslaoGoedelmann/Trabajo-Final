import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ModalUserContainer = styled(motion.div)`
  position: absolute;
  background-color: rgb(100, 100, 100); 
  width: 300px;
  top: 85px;
  right:85px;
  z-index: 98;
  border-radius: 1.5rem ;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 10px 5px black;
  @media (max-width: 750px) {
    top: 70px;
  right:40px;
  }
  @media (max-width: 320px) {
    width: 250px;
    right:65px;
  }
`;

export const LinkUserContainer = styled.div`
color: white;
cursor: pointer;
margin:5px 0;
position: relative;
top:-20px;
`;
export const Triangulo = styled.div`
     width: 0;
     height: 0;
     border-right: 10px solid transparent;
     border-top: 20px solid transparent;
     border-left: 10px solid transparent;
     border-bottom: 20px solid rgb(100, 100, 100);
     position: relative;
     top:-40px;
     left: 98px;

`;

