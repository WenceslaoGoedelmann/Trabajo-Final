import { styled } from "styled-components";
export const UsuarioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: rgb(150, 150, 150);
  box-shadow: 10px 5px 5px black;
  width: 800px;
  height: 250px;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 5px;
  @media (max-width: 850px) {
    flex-direction: column;
    width: 450px;
    height: 350px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 250px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
`;
export const SaludoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-content: center;
  color: rgb(50, 50, 50);
  h2{
    @media (max-width: 500px) {
font-size: 15px;
  }
  }

`;
export const CardContact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-content: center;
  background: rgb(100, 100, 100);
  box-shadow: 10px 5px 5px black;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  @media (max-width: 500px) {
    width: 250px;
    height: 150px;
  }
  h2 {
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 180px;
  justify-content: space-around;
  padding-left: 8px;
  @media (max-width: 500px) {
    width: 250px;
    height: 120px;
  }
  p {
    font-weight: 700;
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }

  span {
    color: white;
    font-weight: 20;
  }
`;

export const BtnLogout = styled.button`
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
  @media (max-width: 500px) {
    padding: 0.5rem 1rem;
    font-size: 8px;
  }
`;
