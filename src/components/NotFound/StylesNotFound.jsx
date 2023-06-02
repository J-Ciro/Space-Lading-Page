import { styled } from "styled-components";
import videoNotFound from "../../assets/images/notFound.gif";

export const StylesNotFound = styled.div`
  background-image: url(${videoNotFound});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    margin-bottom: 10%;
    opacity: 0;
    transform: translateY(-100%);
    animation: aparecer 2s forwards;
    button{
      padding: 1rem 2.5rem ;
      border-radius: 12px;
      border: none;
      background-color: #414d9a;
      opacity: 0.8;
      color: #fff;
      font-family: "Bellefair";
      font-weight: 900;
      letter-spacing: 2px;
      font-size: 1.5rem;
      cursor: pointer;
      
    }
    :hover{
      opacity: 2;
        transform: scale(1.2);
        transition: transform 0.5s ease-out;
      }
    
  }
  @keyframes aparecer{
    0%{
      opacity: 0;
      transform: translateY(-100%);
    }
    100%{
      opacity: 1;
      transform: translateY(0)
    }
  }
`;
