import styled from "styled-components";
import { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainContainer>
      {/* {!open ? (
        <MainWrapper onClick={() => setOpen(true)}>
          <FirstBar style={{ backgroundColor: "red" }}></FirstBar>
          <SecondBar></SecondBar>
          <ThirdBar></ThirdBar>
        </MainWrapper>
      ) : (
        <MainWrapper onClick={() => setOpen(false)}>
          <FirstChangeBar></FirstChangeBar>
          <SecondChangeBar></SecondChangeBar>
          <ThirdChangeBar></ThirdChangeBar>
        </MainWrapper>
      )} */}
      <MainWrapper onClick={() => setOpen(!open)}>
        <FirstBar
          style={
            open
              ? { transform: "translateY(10px) rotate(-45deg)" }
              : { transform: "none" }
          }
        ></FirstBar>
        <SecondBar
          style={
            open ? { backgroundColor: "#000" } : { backgroundColor: "#B4CF9E" }
          }
        ></SecondBar>
        <ThirdBar
          style={
            open
              ? { transform: "translateY(-10px) rotate(45deg)" }
              : { transform: "none" }
          }
        ></ThirdBar>
      </MainWrapper>

      {/* <div className="mainwrapper">
        <div className="firstbar"></div>
        <div className="secondbar"></div>
        <div className="thirdbar"></div>
      </div> */}
    </MainContainer>
  );
};

export default BurgerMenu;

const MainContainer = styled.div`
  background-color: #b4cf9e;
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  background-color: #000;
  width: 37px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const FirstBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #b4cf9e;
  margin-top: 3px;
  transition: all 0.3s 0s ease;
`;

const SecondBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #b4cf9e;
  transition: all 0.3s 0s ease;
`;

const ThirdBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #b4cf9e;
  margin-bottom: 3px;
  transition: all 0.3s 0s ease;
`;

const FirstChangeBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #fff;
  margin-top: 3px;
  transform: translateY(10px) rotate(-45deg);
`;

const SecondChangeBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #88a476;
`;

const ThirdChangeBar = styled.div`
  width: 23px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 3px;
  transform: translateY(-10px) rotate(45deg);
`;
