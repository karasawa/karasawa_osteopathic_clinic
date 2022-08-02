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
          <MainWrapper>
            <Headline>
              <HeadlineWrapper1>
                <W1Text1>痛 み と 向 き 合 い</W1Text1>
                <W1Text2>自 身 の 体 を</W1Text2>
                <W1Text3>知 る 。</W1Text3>
              </HeadlineWrapper1>
              <HeadlineWrapper2>
                <W2Text>日本人の</W2Text>
                <W2Text>四人に一人が</W2Text>
                <W2Text>腰痛に悩んでいると</W2Text>
                <W2Text>言われる現代において、</W2Text>
                <W2Text>痛みとの付き合い方は重要です。</W2Text>
                <W2Text>当院では、けして無理をすることのない、</W2Text>
                <W2Text>痛みとの正しい付き合い方を提供いたします。</W2Text>
              </HeadlineWrapper2>
            </Headline>
            <Slider />
          </MainWrapper>
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

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Headline = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  height: 660px;
  border: 1px solid #281914;
  background-color: #b4cf9e;
  border-right: none;
  position: relative;
  padding: 20px 0 20px 33px;
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
  font-weight: 500;
  color: #547443;
  opacity: 0.7;
  animation: ${fadeUp} 4s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;
