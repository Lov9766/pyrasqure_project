import React from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  /* background-color: #eb4c4c; */
  position: relative;
 
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
`;
const Wrapper = styled.div``;
const Slide = styled.div``;

const ImgContainer = styled.div``;
const Image = styled.img`
width: 100%;
`;
const InfoContainer = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://banner.caratlane.com/live-images/b89c7dce327647e6848cad64b3cab76e.gif" />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}

export default Slider