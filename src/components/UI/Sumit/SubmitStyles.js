import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: rgb(50, 50, 50);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  box-shadow: 10px 5px 5px black;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 750px) {
    font-size: 10px;
    padding: 0.6rem 1rem;
    margin-top: 8px;
    }
`;