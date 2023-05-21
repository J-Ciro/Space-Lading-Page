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
margin: 0 auto;
  gap: 80px;
`;

export const ContentText = styled.div`
color: white;
width: 550px;
display: flex;
flex-direction: column;
gap: 30px;
padding: 20px;

`;

export const ImgCrew = styled.figure`
width:568.07px;
left: 734.93px;
/* /* top:198px; */
display: flex;
`;

export const Slider = styled.div`
  width: 100%;
  margin-bottom: 110px;
  margin-top: 150px;
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
`;

export const DivBtnSlider = styled.div`
display: flex;
gap: 20px;
width: 80%;
transform: translate(80px, -80px);
position: absolute;
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
`;

export const DivMeetCrew = styled.div`
margin-bottom: 60px;
margin-top: 5px;
`;

export const CarouselContainer = styled.div`
  margin-top: 150px;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;
