import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import BuckButton from "../components/atoms/BuckButton";
import Slider from "../components/organisms/Slider";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { memo } from "react";
// eslint-disable-next-line react/display-name
const Introduction: NextPage = memo(() => {
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
          <WorriesWrapper>
            <Worry1>
              <h3>肩・腰・膝に慢性的な痛みがある</h3>
            </Worry1>
            <Worry2>
              <h3>どこに行っても、痛みが改善しない</h3>
            </Worry2>
            <Worry3>
              <h3>最近なんだか疲れやすい</h3>
            </Worry3>
          </WorriesWrapper>
          <SubWrapper>
            <ImageWrapper>
              <ImageSubWrapper>
                <Slider />
              </ImageSubWrapper>
            </ImageWrapper>
            <IntroductionWrapper>
              <Introduction1>
                <TextH4>当院では、そのお悩みを解決いただけます。</TextH4>
                <TextP>
                  お客様へのヒアリングを通じ、痛み・疲れの原因を明確化します。
                </TextP>
                <TextP>
                  表面的な痛みだけでなく原因そのものを解消することで、痛みを根本から絶ち、慢性的痛みの解決に取り組みます。
                </TextP>
                <TextH4>施術内容も豊富に取り揃えております。</TextH4>
                <TextP>
                  例えば、同じ腰痛であっても、一人一人の症状は異なります。
                </TextP>
                <TextP>
                  痛みの強さや頻度、日常生活においての疲労度を考慮し、お客様一人一人にあった施術を提供いたします。
                </TextP>
                <TextP>
                  また施術内容を豊富に取り揃えているため、痛み・疲れに対して、幅広いアプローチをお選びいただけます。
                </TextP>
              </Introduction1>
              <Introduction2>
                <OpeFlowTitle>施術の流れ</OpeFlowTitle>
                <OpeFlowContainer>
                  <OpeFlowWrapper>
                    <OpeFlowText>ヒアリング</OpeFlowText>
                    <OpeFlowText>＆</OpeFlowText>
                    <OpeFlowText>カウンセリング</OpeFlowText>
                    <Step>1st step</Step>
                  </OpeFlowWrapper>
                  <IconWrapper style={{ animationDelay: "2s" }}>
                    <ArrowRightIcon sx={{ fontSize: "50px" }} />
                  </IconWrapper>
                  <OpeFlowWrapper style={{ animationDelay: "4s" }}>
                    <OpeFlowText>施術</OpeFlowText>
                    <Step>2nd step</Step>
                  </OpeFlowWrapper>
                  <IconWrapper style={{ animationDelay: "6s" }}>
                    <ArrowRightIcon sx={{ fontSize: "50px" }} />
                  </IconWrapper>
                  <OpeFlowWrapper style={{ animationDelay: "8s" }}>
                    <OpeFlowText>効果測定</OpeFlowText>
                    <OpeFlowText>＆</OpeFlowText>
                    <OpeFlowText>今後のアドバイス</OpeFlowText>
                    <Step>3rd step</Step>
                  </OpeFlowWrapper>
                </OpeFlowContainer>
              </Introduction2>
            </IntroductionWrapper>
          </SubWrapper>
        </Layout>
      ) : (
        <Layout title="introduction">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
});

export default Introduction;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b4cf9e;
  border: 1px solid #281914;
  border-bottom: none;
  position: relative;
`;

const fadeUpQuestion = keyframes`
0% {
  opacity: 0;
}
80% {
  opacity: 0.8;
}
100% {
  opacity: 1;
}
`;

const Question = styled.h3`
  z-index: 100;
  position: absolute;
  margin-bottom: 55px;
  font-size: 22px;
  animation: ${fadeUpQuestion} 1.7s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;

const WorriesWrapper = styled.div`
  //   background-color: #fac7c1;
  background-color: #b4cf9e;
  width: 100%;
  display: flex;
  height: 100px;
  color: #281914;
`;

const Worry1 = styled.div`
  border: 1px solid black;
  border-right: none;
  height: 100%;
  flex: 0.33;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s 0s ease;
  &:hover {
    font-size: 18px;
  }
`;

const Worry2 = styled.div`
  border: 1px solid black;
  height: 100%;
  flex: 0.34;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s 0s ease;
  &:hover {
    font-size: 18px;
  }
`;

const Worry3 = styled.div`
  border: 1px solid black;
  border-left: none;
  height: 100%;
  flex: 0.33;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s 0s ease;
  &:hover {
    font-size: 18px;
  }
`;

const SubWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  align-items: center;
  background-color: #b4cf9e;
  border: 1px solid #281914;
  border-top: none;
`;

const ImageWrapper = styled.div`
  flex: 0.4;
  display: flex;
  height: 100%;
  border: 1px solid #281914;
  border-top: none;
`;

const ImageSubWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 50px 100px;
  background-color: #b4cf9e;
`;

const IntroductionWrapper = styled.div`
  flex: 0.6;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #b4cf9e;
  color: #281914;
`;

const Introduction1 = styled.div`
  flex: 0.5;
  background-color: #b4cf9e;
  border-bottom: 1px solid #281914;
`;

const OpeFlowTitle = styled.div`
  margin: 0 auto 0 0;
  padding-left: 15px;
  font-weight: bold;
  font-size: 17px;
`;

const Introduction2 = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #b4cf9e;
  padding: 10px;
`;

const OpeFlowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b4cf9e;
  width: 100%;
  //   padding: 10px;
`;

const TextH4 = styled.h4`
  margin: 0;
  padding: 30px 20px 10px 25px;
`;

const TextP = styled.p`
  margin: 0;
  padding: 4px 4px 4px 40px;
`;

const fadeUp = keyframes`
0% {
  opacity: 1;
}
10% {
  opacity: 0.4;
}
20% {
  opacity: 1;
}
30% {
  opacity: 0.4;
}
40% {
  opacity: 1;
}
100% {
  opacity: 1;
}
`;

const OpeFlowWrapper = styled.div`
  position: relative;
  width: 210px;
  height: 210px;
  background-color: #000;
  color: #fff;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  animation: ${fadeUp} 13s infinite forwards;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeUp} 13s infinite forwards;
`;

const OpeFlowText = styled.p`
  margin: 0;
`;

const Step = styled.p`
  position: absolute;
  top: 0;
  padding: 5px 10px;
  border-radius: 20px;
  color: #b4cf9e;
`;
