import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Container = styled.div`
  height: 60px;
  background-color: rgb(154, 222, 245);
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
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display:flex;
align-items: center;
margin-left:25px;
padding: 5px;
`;

const Input = styled.input`
    border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
      text-shadow: -2px 1px 3px rgba(0,0,0,0.71);

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
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
            <Input></Input>
            <SearchIcon style={{color:"grey",fontSize:"16px" }}/>
          </SearchContainer>
        </Left>

        <Center>
          <Logo>PYRA JWELS</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
