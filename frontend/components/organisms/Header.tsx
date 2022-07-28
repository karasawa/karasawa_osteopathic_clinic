import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ ml: 6, mr: 6 }}>
          <MainWrapper>
            <Link href="/">
              <Title>柄澤整骨院</Title>
            </Link>
            <Link href="#">
              <MenuLink>当院の特徴</MenuLink>
            </Link>
            <Link href="#">
              <MenuLink>対応症状</MenuLink>
            </Link>
            <Link href="#">
              <MenuLink>施術の流れ</MenuLink>
            </Link>
            <Link href="#">
              <MenuLink>院長紹介</MenuLink>
            </Link>
            <Link href="#">
              <MenuLink>FAQ</MenuLink>
            </Link>
            <Link href="#">
              <MenuLink>アクセス</MenuLink>
            </Link>
            <ButtonWrapper>
              <TellButton>電話する</TellButton>
              <ReserveButton>予約する</ReserveButton>
            </ButtonWrapper>
          </MainWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h4`
  color: #3581de;
  cursor: pointer;
`;

const MenuLink = styled.a`
  color: #3581de;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ButtonWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

const TellButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background-color: #3581de;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;
const ReserveButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background-color: #3581de;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;
