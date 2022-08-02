import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import BuckButton from "../components/atoms/BuckButton";

const Introduction: NextPage = () => {
  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="introduction">
          <MainWrapper>
            <Image src="/okunai.jpg" layout="fill" style={{ opacity: 0.8 }} />
            <BuckButton />
            <Question>このようなお悩み、お持ちではありませんか？</Question>
          </MainWrapper>
          <SubWrapper>
            <WorriesWrapper>
              <Worry1></Worry1>
            </WorriesWrapper>
          </SubWrapper>
        </Layout>
      ) : (
        <Layout title="introduction">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
};

export default Introduction;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b4cf9e;
  border: 1px solid #281914;
  position: relative;
`;

const Question = styled.h3`
  z-index: 100;
  position: absolute;
  margin-bottom: 55px;
  font-size: 22px;
`;

const SubWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #b4cf9e;
  border: 1px solid #281914;
  border-top: none;
`;

const WorriesWrapper = styled.div``;

const worry1 = styled.p``;

const Headline = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  height: 660px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  border-right: none;
  position: relative;
`;

const HeadlineWrapper1 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  color: #281914;
`;

const fadeUp = keyframes`
0% {
  transform: translateY(55px);
  opacity: 0;
}
80% {
  opacity: 0.8;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const W1Text1 = styled.p`
  margin: 25px 0 0 0;
  font-size: 42px;
  font-weight: bold;
  animation: ${fadeUp} 1.2s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const W1Text2 = styled.p`
  margin: 10px 0 0 0;
  font-size: 42px;
  font-weight: bold;
  animation: ${fadeUp} 2.2s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const W1Text3 = styled.p`
  margin: 10px 0 0 0;
  font-size: 42px;
  font-weight: bold;
  animation: ${fadeUp} 3.2s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const HeadlineWrapper2 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const W2Text = styled.h3`
  margin: 15px 0 0 0;
  font-size: 17px;
  font-weight: 600;
  color: #547443;
  opacity: 0.7;
  animation: ${fadeUp} 4s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;
