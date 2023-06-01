import styled from "styled-components";
import indexBackgroundCrew from "../../assets/crew/background-crew-desktop.jpg";

export const StylesCrew = styled.div`
  display: flex;
  background-image: url(${indexBackgroundCrew});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
`;

export const SliderItem = styled.div`
  /* Estilos para los elementos del slider */
  display: ${({ active }) => (active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 90%;
  height: 600px;
  margin: 0 auto;
  gap: 80px;
  background-color: aqua; //Eliminar apenas termine
  overflow: hidden;

  //Tablet
  @media screen and (max-width: 768px) {
    background-color: #e5ff00; //Eliminar apenas termine
    flex-direction: column;
    height: auto;
  }
`;


export const ContentText = styled.div`
color: white;
width: 550px;
display: flex;
flex-direction: column;
gap: 30px;
padding: 20px;
background-color: darkblue; //Eliminar apenas termine

//Tablet
@media screen and (max-width: 768px){
  width: 100%;
  transform: translateY(-50px);
}
`;

export const ImgCrew = styled.figure`
  width: 568.07px;
  left: 734.93px;
  background-color: green; //Eliminar apenas termine

  //Tablet
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(-60px);
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
  background-color: yellow; //Eliminar apenas termine

  //Tablet
  @media screen and (max-width: 768px) {
  background-color: orangered; //Eliminar apenas termine
  width: 100%;
  margin-top: 150px;
  height: auto;
  }
`;

export const RolePerson = styled.h3`
font-family: 'Bellefair';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 37px;
text-transform: uppercase;
width: 309px;
height: 37px;
opacity: 0.5;
background-color: violet; //Eliminar al terminar

//Tablet
@media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
`;

export const NamePerson = styled.h1`
font-family: 'Bellefair';
font-style: normal;
font-weight: 400;
font-size: 52px;
line-height: 64px;
width: 614px;
height: 64px;
text-transform: uppercase;
background-color: red; //Eliminar apenas termine

//Tablet
@media screen and (max-width: 768px) {
display: flex;
justify-content: center;
width: 100%;
font-size: 2.5rem;
}
`;

export const BioPerson = styled.p`
font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 18px;
text-align: justify;
line-height: 32px;
width: 444px;
height: 128px;

//Tablet
@media screen and (max-width: 768px){
  width: 100%;
  font-size: 1rem;
  line-height: 1.75rem;
  text-align: center;
}
`;

export const DivBtnSlider = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  height: 30px;
  background-color: #305c17; //Eliminar apenas termine
  align-items: center;
  margin-top: 30px;

  //Tablet
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    display: none;
 }
`;

export const DivBtnSliderTablet = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  height: 30px;
  background-color: #173d5c; //Eliminar apenas termine
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

&:hover{
  opacity: 0.5;
  background-color: white;
}
`;

export const MeetCrew = styled.h3`
height: 34px;
font-weight: 400;
font-size: 25px;
line-height: 34px;
color: #FFFFFF;
display: flex;
gap: 20;
flex-direction: row;
letter-spacing: 3.375px;
background-color: #2f3dff; //Eliminar apenas termine
display: flex;
align-items: center;
margin-top: 50px;

& p{
  font-family: 'Barlow Condensed';
  font-weight: 700;
  line-height: 24px;
  opacity: 0.5;
  margin-right: 10px;

  //Tablet
  @media screen and (max-width: 768px){
    font-size: 1.25rem;
  }
}

//Tablet
@media screen and (max-width: 768px){
  font-size: 20px;
}
`;

export const TitleMeetCrew = styled.h4`
font-family: 'Barlow Condensed';
font-weight: 400;
line-height: 24px;

//Tablet
@media screen and (max-width: 768px){
  font-size: 1.78rem;
}
`;

export const DivMeetCrew = styled.div`
margin-bottom: 60px;
margin-top: 5px;

//Tablet
@media screen and (max-width: 768px){
  margin-bottom: 0;
}
`;

export const CarouselContainer = styled.div`
  margin-top: 150px;
  width: 90%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;
