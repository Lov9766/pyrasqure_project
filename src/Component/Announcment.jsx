import React from 'react'
import styled from 'styled-components'



const Announcment1 = styled.div`
  height: 30px;
  background-color:teal ;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`;


const Announcment = () => {
  return (
    <Announcment1>
      <marquee behavior="scroll" direction="right">
        Super Deal Shop more than Rs 5000/- get 20% off
      </marquee>
    </Announcment1>
  );
}

export default Announcment