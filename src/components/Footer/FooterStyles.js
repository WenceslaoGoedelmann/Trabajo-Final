import { styled } from "styled-components";


export const FooterContainerStyled = styled.footer`
display: flex;
justify-content: center;
height:40px;
width: 100%;
align-items: center;
background-color: rgb(50, 50, 50); 
@media (max-width: 750px) {
      font-size: 13px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
`;
