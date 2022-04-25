import React, { useState} from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {slideItems} from '../data';
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  /* background-color: #eb4c4c; */
  position: relative;
  overflow: hidden;
 
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
/* flex-direction: row; */
transform: translateX(${props => props.sildeIndex * -100}vw);
transition: all 1s ease;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
height:100%;
flex: 1;
`;
const Image = styled.img`
height:80%;

`;
const InfoContainer = styled.div`
padding: 50px;
flex: 1;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
border: 0.5px solid black;
border-radius: 3px;
background-color:transparent;
color:black;
cursor: pointer;
font-size: 20px;
`;


const Slider = () => {
const [sildeIndex,SetsildeIndex]=useState(0);
  const handleClick = (direction) => { 
    if(direction === "left"){
      SetsildeIndex(sildeIndex >0? sildeIndex-1:0);
    } else {
      SetsildeIndex(sildeIndex < slideItems.length-1? sildeIndex+1:sildeIndex);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper sildeIndex={sildeIndex}>
        {slideItems.map((item) => (

          <Slide bg={ item.bg}>
          <ImgContainer>
            <Image src={item.image}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc> {item.desc}</Desc>
            <Button>Click Me</Button>
          </InfoContainer>
        </Slide>
          ))}
      
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}

export default Slider