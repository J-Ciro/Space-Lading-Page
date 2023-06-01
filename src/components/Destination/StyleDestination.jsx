import { styled } from "styled-components";


export const StylesDestination = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&display=swap');
  .titleDestination {
    position: absolute;
    position: absolute;
    width: 382px;
    height: 34px;
    left: 166.5px;
    top: 212px;

    .titleNumber {
      position: absolute;
      height: 34px;
      left: 0%;
      right: 93.19%;
      top: calc(50% - 34px / 2);

      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.25;
    }
    .title {
      position: absolute;
      height: 34px;
      left: 14.14%;
      right: 1.57%;
      top: calc(50% - 34px / 2);
      width: 100%;

      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;

      letter-spacing: 4.725px;
      text-transform: uppercase;

      color: #ffffff;
    }
  }

  .infoDestination{
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    font-family: "Barlow Condensed";
    position: absolute;
    top: 35%;
    color: #ffffff;
    img{
      width: 360px;
      margin: 15% 0% 0% 40%;
    }

    .informacionPlaneta{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     
      width: 35%;
      margin-right: 7%;

      hr{
        border: 0.1mm solid #686868;
        margin: 8% 0% 4% 0% ;
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
            border-bottom: solid 3px #878787;
            mix-blend-mode: normal;
            padding-bottom: 7px;
            cursor: pointer;
        }
      }
      
    }
  }
  .title{
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    color: #FFFFFF;
  }
  .description{
    font-family: 'Barlow', sans-serif;
    font-style: normal;

    font-size: 18px;
    line-height: 32px;
    
    color: #D0D6F9;

  }
    }
    .distanciaTiempo{
      display: flex;
      gap: 30%;
      h4{
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: #D0D6F9;
      }
      h2{
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
  }
`;
