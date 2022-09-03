import styled from "styled-components";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../features/burgerMenu/burgerMenuSlice";
import { RootState } from "../../store";

// eslint-disable-next-line react/display-name
const BurgerMenu = memo(() => {
  const { isOpen } = useSelector((state: RootState) => state.burgerMenu);
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <MainWrapper onClick={() => dispatch(toggleMenu())}>
        <FirstBar
          style={
            isOpen
              ? { transform: "translateY(10px) rotate(-225deg)" }
              : { transform: "none" }
          }
        ></FirstBar>
        <SecondBar
          style={
            isOpen
              ? { backgroundColor: "#000" }
              : { backgroundColor: "#B4CF9E" }
          }
        ></SecondBar>
        <ThirdBar
          style={
            isOpen
              ? { transform: "translateY(-10px) rotate(225deg)" }
              : { transform: "none" }
          }
        ></ThirdBar>
      </MainWrapper>
    </MainContainer>
  );
});

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
