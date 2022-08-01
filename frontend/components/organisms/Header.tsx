import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import Link from "next/link";
import BurgerMenu from "../molecules/BurgerMenu";
import { useEffect, useState } from "react";
import Dialog from "../molecules/Dialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#B4CF9E",
          zIndex: 10,
          border: "1px solid #281914",
          borderBottom: "none",
          boxShadow: "0",
        }}
      >
        <Toolbar sx={{ height: "55px" }}>
          <MainWrapper>
            <ButtonWrapper>
              <TellButton onClick={() => setOpen(true)}>電話する</TellButton>
              <ReserveButton>予約する</ReserveButton>
            </ButtonWrapper>
            <TitleWrapper>
              <Link href="/">
                <Title>柄澤整骨院</Title>
              </Link>
            </TitleWrapper>
            {/* <Link href="#">
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
            </Link> */}
            <BurgerMenuWrapper>
              <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </BurgerMenuWrapper>
          </MainWrapper>
        </Toolbar>
      </AppBar>
      <SlideMenu
        style={
          menuOpen
            ? {
                width: "300px",
              }
            : { width: 0, height: 0 }
        }
      >
        <p
          style={
            menuOpen
              ? { backgroundColor: "red", opacity: 1 }
              : { display: "none" }
          }
        >
          aaa
        </p>
      </SlideMenu>
      <Dialog open={open} setOpen={setOpen} />
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

const TitleWrapper = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h2`
  color: #281914;
  cursor: pointer;
`;

const MenuLink = styled.a`
  color: #281914;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ButtonWrapper = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: start;
`;

const BurgerMenuWrapper = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: end;
`;

const TellButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background-color: #281914;
  color: #fff;
  cursor: pointer;
  font-family: "Shippori Mincho", serif;
  &:hover {
    background-color: #000;
  }
`;
const ReserveButton = styled.button`
  padding: 10px 14px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  background-color: #281914;
  color: #fff;
  cursor: pointer;
  font-family: "Shippori Mincho", serif;
  &:hover {
    background-color: #000;
  }
`;

const SlideMenu = styled.div`
  width: 300px;
  height: 600px;
  background-color: #000;
  position: absolute;
  z-index: 100;
  right: 0;
  opacity: 0.8;
  transition: all 0.5s ease-out;
`;
