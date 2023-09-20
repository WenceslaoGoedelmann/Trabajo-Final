import { styled } from "styled-components";
export const ConfirmedBuyWrapper = styled.div`
width: 100%;
height: auto;
padding-top:200px;
padding-bottom:230px;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(50, 50, 50); 
gap:30px;
span{
    color:rgb(150, 150, 150);
}
@media (max-width: 800px) {
        font-size: 11px;
    }
    @media (max-width: 550px) {
        font-size: 8px;
    }   
    
    @media (max-width: 550px) {
        font-size: 7px;
    } 
`;



export const Btn = styled.button`
    padding: 10px 15px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid rgb(70, 70, 70);
    box-shadow: 10px 5px 5px black;
    background-color:rgb(50, 50, 50);
    @media (max-width: 800px) {
        font-size: 10px;
    }
    @media (max-width: 550px) {
        font-size: 8px;
        padding: 5px 10px;
    }  


`;