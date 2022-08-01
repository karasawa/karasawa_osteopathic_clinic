import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import Slider from "../components/organisms/Slider";

const Home: NextPage = () => {
  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="home">
          <FirstWrapper>
            <Headline1>
              <Head1TextWrapper1>
                <H1W1Text1>痛みと向き合い、</H1W1Text1>
                <H1W1Text2>{"　　"}自身の体を理解する。</H1W1Text2>
              </Head1TextWrapper1>
              <Head1TextWrapper2>
                <H1W2Text>
                  日本人の四人に一人が腰痛に悩んでいると言われる現代において、
                </H1W2Text>
                <H1W2Text>痛みとの付き合い方は非常に重要な問題です。</H1W2Text>
                <H1W2Text>
                  無理をしない、痛みとの正しい付き合い方を提案します。
                </H1W2Text>
              </Head1TextWrapper2>
            </Headline1>
            <Slider />
          </FirstWrapper>
          <SecondWrapper>
            <Headline2></Headline2>
            <Headline3></Headline3>
          </SecondWrapper>
        </Layout>
      ) : (
        <Layout title="home">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
};

export default Home;

const FirstWrapper = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SecondWrapper = styled.div`
  width: 100%;
  height: 225px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ExplanationBoxWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Headline1 = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
  height: 670px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  border-right: none;
  position: relative;
  padding: 20px;
`;

const Head1TextWrapper1 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  color: #281914;
`;

const fadeUp = keyframes`
0% {
  transform: translateY(30px);
  opacity: 0;
}
80% {
  opacity: 1;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const H1W1Text1 = styled.p`
  margin: 17px 0 0 0;
  font-size: 35px;
  font-weight: bold;
  animation: ${fadeUp} 1.5s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const H1W1Text2 = styled.p`
  margin: 0;
  font-size: 35px;
  font-weight: bold;
  animation: ${fadeUp} 2.5s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const Head1TextWrapper2 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1W2Text = styled.h3`
  margin: 0;
  font-size: 17px;
  color: #281914;
  opacity: 0.8;
  animation: ${fadeUp} 2.9s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const Headline2 = styled.div`
  flex: 0.5;
  height: 250px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  border-right: none;
  border-top: none;
`;

const Headline3 = styled.div`
  flex: 0.5;
  height: 250px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  border-top: none;
`;
