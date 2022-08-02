import type { NextPage } from "next";
import { useMediaQuery } from "@mui/material";
import Layout from "../components/Layout";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import BuckButton from "../components/atoms/BuckButton";

const Access: NextPage = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/molecules/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {matches ? (
        <Layout title="access">
          <MainWrapper>
            <BuckButton />
            <SubWrapper>
              <MapWrapper>
                <Map />
              </MapWrapper>
              <TextWrapper>
                <Title style={{ margin: 0 }}>アクセス</Title>
                <Text>長野電鉄　信濃吉田駅より徒歩4分</Text>
                <Text>北信濃電鉄　北長野駅より徒歩5分</Text>
                <Text>
                  ※自動車・バイクでのご来院の際は、当院向かいの駐車場をご利用ください。
                </Text>
                <Title>住所・電話番号</Title>
                <Text>〒000-0000 横浜市鶴見区鶴見中央0-00-00 〇〇ビル3階</Text>
                <Text>TEL：080-1234-5678</Text>
                <Title>受付時間</Title>
                <Text>平日　9:00～12:30　/　15:00～20:00</Text>
                <Text>土曜　9:00～14:30</Text>
              </TextWrapper>
            </SubWrapper>
          </MainWrapper>
        </Layout>
      ) : (
        <Layout title="access">
          <p>aa</p>
        </Layout>
      )}
    </div>
  );
};

export default Access;

const MainWrapper = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  background-color: #b4cf9e;
  position: relative;
  color: #281914;
`;

const SubWrapper = styled.div`
  width: 1200px;
  height: 660px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MapWrapper = styled.div`
  flex: 0.5;
  height: 470px;
`;

const TextWrapper = styled.div`
  flex: 0.5;
  height: 470px;
  padding: 15px 15px 15px 30px;
`;

const Title = styled.h3`
  margin: 25px 0 0 0;
  font-size: 23px;
`;

const Text = styled.p`
  margin: 10px 0 0 0;
  font-size: 18px;
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
  color: #281914;
  opacity: 0.7;
  animation: ${fadeUp} 4s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
`;
