import { styled } from "styled-components";
import BackgrouDestination from "../../assets/destination/background-destination-desktop.jpg";

export const StylesDestination = styled.div`
  background-image: url(${BackgrouDestination});
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: #fff;
  font-family: "Barlow Condensed";
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
  .navPlanetas {
    position: absolute;
    right: 21.3%;
    bottom: 55%;
    display: flex;
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
          &:hover {
            border-bottom: solid 3px #ffff;
            mix-blend-mode: normal;
            padding-bottom: 7px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
