import styled from "styled-components";
import indexBackgroundCrew from "../../assets/crew/background-crew-desktop.jpg";

export const StylesCrew = styled.div`
  display: flex;
  background-image: url(${indexBackgroundCrew});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 426px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const SliderItem = styled.div`
  /* Estilos para los elementos del slider */
  display: ${({ active }) => (active ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
  //justify-content: space-between;
  width: 100vw;
  height: 600px;
  margin: 0 auto;
  gap: 80px;
  overflow: hidden;
  transform: translateY(-80px);

  //Tablet
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  @media screen and (max-width: 426px) {
    flex-direction: column-reverse;
    height: auto;
    margin-top: 50px;
  }
`;

export const ContentText = styled.div`
  color: white;
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100vw;
    /* transform: translateY(-50px); */
  }
  @media screen and (max-width: 426px) {
    transform: translateY(-170px);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImgCrew = styled.figure`
  /* width: 568.07px; */
  left: 734.93px;

  img {
    width: 400px;
    @media screen and (max-width: 426px) {
      width: 320px;
      transform: translateX(-20px);
      /* overflow: hidden;
   height: 40%; */
    }
    @media screen and (max-width: 768px) {
      /* width:380px; */
      transform: translateX(-20px);
    }
  }

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(-60px);
  }
  @media screen and (max-width: 426px) {
    /* position: absolute;
    width: 177.12px;
    left: 98.62px;
    top: 200px;
    width: 55%; */
    margin: 100px;
    width: 70%;
    /* height: 100%;
    overflow: hidden; */
    overflow: hidden;
    height: 430px;
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 110px;
  margin-top: 150px;

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 150px;
    height: auto;
  }
  @media screen and (max-width: 426px) {
  }
`;

export const RolePerson = styled.h3`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 37px;
  text-transform: uppercase;
  width: 309px;
  height: 37px;
  opacity: 0.5;

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 0.897rem;
  }
`;

export const NamePerson = styled.h1`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 64px;
  width: 614px;
  height: 64px;
  text-transform: uppercase;

  //Tablet
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`;

export const BioPerson = styled.p`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: justify;
  line-height: 32px;
  width: 444px;
  height: 128px;
  color:#D0D6F9;

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: center;
  }
  @media screen and (max-width: 426px) {
    font-size: 1rem;
    font-weight: 400;
    gap: 5vh;
    width: 326px;
  }
`;

export const DivBtnSlider = styled.div`
  display: flex;
  gap: 20px;
  width: 20vw;
  height: 30px;
  align-items: center;
  margin-top: 50px;
  /* margin-top: 30px; */

  //Tablet
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    display: none;
  }
  @media screen and (max-width: 426px) {
  }
`;

export const DivBtnSliderTablet = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  height: 30px;
  transform: translate(75px, 0);
  align-items: center;
  display: none;

  //Tablet
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transform: translate(0px, -100px);
  }
  @media screen and (max-width: 426px) {
    transform: translate(0px, 520px);
    /* position: absolute; */
  }
`;

export const Btn = styled.button`
  width: 15px;
  height: 15px;
  background-color: white;
  border: transparent;
  border-radius: 50px;
  cursor: pointer;
  opacity: 0.17;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
    background-color: white;
  }
`;

export const MeetCrew = styled.h3`
  height: 34px;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #ffffff;
  display: flex;
  gap: 20;
  flex-direction: row;
  letter-spacing: 3.375px;
  display: flex;
  align-items: center;
  margin-top: 50px;

  & p {
    font-family: "Barlow Condensed";
    font-weight: 700;
    line-height: 24px;
    opacity: 0.5;
    margin-right: 10px;
    

    //Tablet
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  //Tablet
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleMeetCrew = styled.h4`
  font-family: "Barlow Condensed";
  font-weight: 400;
  line-height: 24px;

  //Tablet
  @media screen and (max-width: 768px) {
    font-size: 1.78rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1rem;
  }
`;

export const DivMeetCrew = styled.div`
  margin-bottom: 80px;
  margin-top: -40px;

  //Tablet
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 426px) {
    position: absolute;
    left: 30%;
    transform: translateY(-600px);
    z-index: 200;
  }
`;

export const CarouselContainer = styled.div`
  margin-top: 150px;
  width: 100vw;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;
