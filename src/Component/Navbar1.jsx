import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Container = styled.div`
  height: 80px;
  background-color: rgb(239, 243, 245);
  /* background-color:black;  */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
align-items: center;
  display: flex;
  justify-content:space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display:flex;  
align-items: center;
margin-left:25px;
padding: 0px;
`;

const Input = styled.input`
    border: none;
    height: 23px;
    width: 300px;
    padding: 5px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
      /* text-shadow: -2px 1px 3px rgba(0,0,0,0.71); */
display: flex;
flex-direction:row;
justify-content: center;
`;
const Text = styled.span`
  font-size: 20px;`;
const Img = styled.img`
  width: 10%;
  /* height: rem; */
  
  
 
  `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
font-weight: bold;
margin-left: 25px;
cursor: pointer;


`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input>
            </Input>
            <SearchIcon style={{ color: "grey", fontSize: "30px", height:"30px" ,cursor:"pointer" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>
            <Img src="./image/12.png"></Img>
          </Logo>
          <Text> 𝐏𝐘𝐑𝐀 𝐉𝐄𝐖𝐄𝐋𝐒</Text>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
