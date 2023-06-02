import { styled } from "styled-components";
import bacgroundTablet from "../../assets/destination/background-destination-tablet.jpg";

export const StylesDestination = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&display=swap");
  .infoDestination {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    font-family: "Barlow Condensed";
    position: absolute;
    top: 35%;
    color: #ffffff;
    img {
      width: 400px;
      display: flex;
      margin: 0% 0% 0% 40%;
      opacity: 0;
      transform: translateY(-50%);
      transform: translateX(-100%);
      animation: aparecer 1s forwards;
      @media screen and (max-width:1260px) {
        margin: 0% 0% 0% 10%;
      }
      @media screen and (max-width:890px) {
        margin: 0% 0% 0% -20%;
      }
      @keyframes aparecer {
      0%{
        opacity: 0;
        transform: translateY(-50%);
        transform: translateX(-100%);
      }
      100%{
        opacity: 1;
        transform: translateY(0);
        transform: translateX(0);
      }
    }
    }

    .informacionPlaneta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;
      margin-right: 7%;

      hr {
        border: 0.1mm solid #383B4B;
        margin: 8% 0% 4% 0%;
      }
      .navPlanetas {
        display: flex;
        margin-bottom: 10%;
        ul {
          display: flex;
          gap: 20px;
          list-style: none;
          li {
            font-family: "Barlow Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;
            cursor: pointer;
            color: #d0d6f9;

            :hover {
              border-bottom: solid 3px #FFFFFF;
              opacity: 0.5;
              mix-blend-mode: normal;
              padding-bottom: 7px;
              cursor: pointer;
            }
          }
        }
      }

      .title {
        font-family: "Bellefair";
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 115px;
        color: #ffffff;
      }
      .description {
        font-family: "Barlow Condensed", sans-serif;
        font-style: normal;

        font-size: 18px;
        line-height: 32px;

        color: #d0d6f9;
      }
      .distanciaTiempo {
      display: flex;
      gap: 30%;
      h4 {
        font-family: "Barlow Condensed";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: #d0d6f9;
        margin-bottom: 2%;
      }
      h2 {
        font-family: "Bellefair";
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    }
   
  }

  @media screen and (max-width: 768px) {
    background-image: url(${bacgroundTablet});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 120vh;

    .infoDestination {
      margin: 0;
      padding: 0;
      top: 25%;
      display: flex;
      flex-direction: column;
      transform: translateY(40px);
     

      img {
        width: 260px;
        margin: 0;
        padding: 0;
      }
      .informacionPlaneta {
        display: flex;
        width: 95%;
        justify-content: space-around;
        .navPlanetas{
          justify-content: space-around;
          margin: 5% 0% 2% 6%;
         
        }
        .title{
          font-size: 80px;
          display: flex;
          justify-content: center;
          margin: 0% 0% 0% 6%;
        }
        .description{
          text-align: center;
          font-size: 16px;
          line-height: 28px;
          margin-left: 6%;
        }
        .distanciaTiempo{
          justify-content: center;
          h4 , h2{
            text-align: center;
          }
        }
      }
    }
  }
  @media screen and (max-width: 426px){
    .distanciaTiempo{
      flex-direction: column;
      .distancia{
        margin: 5% 0% 10% 0%;
      }
    }
  } 
`;
